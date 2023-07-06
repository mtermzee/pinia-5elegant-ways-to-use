import { createPinia } from "pinia";
import { Router } from "vue-router";
import { router } from "@/router";
import { markRaw } from "vue";

export const pinia = createPinia();

// Using the Router within a Store and vice versa
pinia.use(({ store }) => {
	// USING markRaw for complex objects for avoid problems and get performance
	store.router = markRaw(router);
});

// check on console such cool thing :) Intercepting Actions
pinia.use(({ store }) => {
	store.$onAction(({ store, name, args, after, onError }) => {
		console.log(
			`🛫[${store.$id}] action ${name} with args ${JSON.stringify(
				args
			)} was invoked`
		);

		after((result) => {
			console.log(
				`🛬[${store.$id}] action ${name} with args ${JSON.stringify(
					args
				)} was resolved with ${JSON.stringify(result)}`
			);
		});

		onError((error) => {
			console.log(`❌[${store.$id}] action ${name} threw an error ${error}`);
			// console.log(pinia.state.value);
		});
	});
});

declare module "pinia" {
	export interface PiniaCustomProperties {
		router: Router;
	}
}
