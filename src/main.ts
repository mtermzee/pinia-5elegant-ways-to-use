import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { pinia } from "./pinia";

const app = createApp(App);

app.use(store).use(pinia).use(router).mount("#app");
