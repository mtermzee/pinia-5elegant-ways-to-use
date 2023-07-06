<template>
    <div>
        <h1>Auth Home</h1>
        <pre>{{ authStore.$state }}</pre>
        <p>Logged in as {{ authStore.user?.name }}</p>
        <button @click="authStore.login('admin', 'admin')">Login</button>
        <button @click="authStore.logout()">Logout</button>
    </div>
</template>

<script lang="ts">
import { useUserStore } from "@/store/auth"
import { useNotificationsStore } from "@/store/notifications";
import { defineComponent } from "vue"
import { useRouter } from "vue-router";

export default defineComponent({
    name: "AuthHome",
    setup() {
        const authStore = useUserStore();
        const router = useRouter();
        const notificationsStore = useNotificationsStore();

        return {
            authStore,
            router,
            notificationsStore
        }
    }
})
</script>

<style></style>