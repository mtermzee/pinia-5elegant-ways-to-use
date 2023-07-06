<template>
    <button @click="counter.increment()">{{ counter.count }}</button>

    <pre>{{ fileSystem.files }}</pre>
    <button @click="fileSystem.open()">Load Files</button>
</template>

<script lang="ts">
import { useCounterStore } from "@/store/counter"
import { useFileStore } from "@/store/file"
import { defineComponent } from "vue"

export default defineComponent({
    name: "CounterHome",
    setup() {
        const counter = useCounterStore()
        const fileSystem = useFileStore()

        return {
            counter,
            fileSystem
        }
    }
})
</script>

<style></style>