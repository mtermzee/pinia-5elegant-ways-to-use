import { acceptHMRUpdate, defineStore } from "pinia";
// https://vueuse.org/guide/
import { useFileDialog } from "@vueuse/core";

export const useFileStore = defineStore("file", () => {
	const { files, open } = useFileDialog();

	return {
		files,
		open,
	};
});

// maybe needs to fix
if ((import.meta as any).hot) {
	(import.meta as any).hot.accept(
		acceptHMRUpdate(useFileStore, (import.meta as any).hot)
	);
}
