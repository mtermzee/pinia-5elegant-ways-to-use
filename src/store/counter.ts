import { acceptHMRUpdate, defineStore } from "pinia";
// https://vueuse.org/guide/
import { useStorage } from "@vueuse/core";

export const useCounterStore = defineStore("counter", () => {
	const count = useStorage("my-counter", 0);

	function increment(amount = 1) {
		count.value! += amount;
	}

	return {
		count,
		increment,
	};
});

// maybe needs to fix
if ((import.meta as any).hot) {
	(import.meta as any).hot.accept(
		acceptHMRUpdate(useCounterStore, (import.meta as any).hot)
	);
}
