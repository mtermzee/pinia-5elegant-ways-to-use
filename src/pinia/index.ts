import { createPinia } from "pinia";
import { Router } from "vue-router";
import { router } from "@/router";
import { markRaw } from "vue";

export const pinia = createPinia();

pinia.use(({ store }) => {
	// USING markRaw for complex objects for avoid problems and get performance
	store.router = markRaw(router);
});

declare module "pinia" {
	export interface PiniaCustomProperties {
		router: Router;
	}
}
