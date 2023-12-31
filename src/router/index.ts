import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useUserStore } from "@/store/auth";
import { pinia } from "@/pinia";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	},
];

export const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

// Using the Router within a Store and vice versa
router.beforeEach((to) => {
	if (to.meta.requiresAuth) {
		const userSore = useUserStore(pinia);
		if (!userSore.user) {
			router.push("/login");
		}
	}
});

export default router;
