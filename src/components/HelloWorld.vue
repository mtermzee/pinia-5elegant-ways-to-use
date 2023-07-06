<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <AuthHome />
    <CounterHome />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AuthHome from "./AuthHome.vue";
import CounterHome from "./CounterHome.vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: { CounterHome, AuthHome }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
