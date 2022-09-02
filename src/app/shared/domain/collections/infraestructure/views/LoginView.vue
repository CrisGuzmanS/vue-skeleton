<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  data() {
    return {
      password: "",
      email: "",
    };
  },
});
</script>

<template>
  <form>
    email
    <input type="text" name="email" v-model="password" />

    password
    <input type="password" name="password" v-model="email" />

    <button type="submit">guardar</button>
  </form>
</template>