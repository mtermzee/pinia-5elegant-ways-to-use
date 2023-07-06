import { acceptHMRUpdate, defineStore } from "pinia";

export const useNotificationsStore = defineStore("notifications", {
	state: () => ({
		notifications: [] as string[],
	}),

	actions: {
		showNotification(message: string) {
			this.notifications.push(message);
		},
		clearNotification() {
			this.notifications = [];
		},
	},
});

// maybe needs to fix
if ((import.meta as any).hot) {
	(import.meta as any).hot.accept(
		acceptHMRUpdate(useNotificationsStore, (import.meta as any).hot)
	);
}
