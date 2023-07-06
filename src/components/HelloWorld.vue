<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <CounterHome />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CounterHome from "./CounterHome.vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: { CounterHome }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
