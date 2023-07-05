import { acceptHMRUpdate, defineStore } from "pinia";

export const useUserStore = defineStore("auth", {
	state: () => ({
		user: null as User | null,
	}),

	actions: {
		async login(user: string, password: string) {
			this.user = await verifyCredentials(user, password);
		},
		logout() {
			this.user = null;
			this.router.push("/login");
		},
	},
});

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
