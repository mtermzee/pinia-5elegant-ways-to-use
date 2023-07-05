import { acceptHMRUpdate, defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useAuthSetupStore = defineStore("auth-setup", () => {
	const router = useRouter();
	const user = ref<User | null>(null);
	async function login(name: string, password: string) {
		user.value = await verifyCredentials(name, password);
	}
	function logout() {
		user.value = null;
		router.push("/login");
	}

	return { user, login, logout };
});

// maybe needs to fix
if ((import.meta as any).hot) {
	(import.meta as any).hot.accept(
		acceptHMRUpdate(useAuthSetupStore, (import.meta as any).hot)
	);
}

interface User {
	uid: number;
	name: string;
	photoUrl: string;
}

async function verifyCredentials(
	user: string,
	password: string
): Promise<User> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (user === "admin" && password === "admin") {
				resolve({
					uid: 1,
					name: "Admin",
					photoUrl: "https://picsum.photos/200",
				});
			} else {
				reject(new Error("Invalid credentials"));
			}
		}, 1000);
	});
}
