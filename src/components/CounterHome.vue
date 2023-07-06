<template>
    <button @click="counter.increment()">{{ counter.count }}</button>
</template>

<script lang="ts">
import { useCounterStore } from "@/store/counter"
import { defineComponent } from "vue"
export default defineComponent({
    name: "CounterHome",
    setup() {
        const counter = useCounterStore()
        return {
            counter
        }
    }
})
</script>

<style></style>