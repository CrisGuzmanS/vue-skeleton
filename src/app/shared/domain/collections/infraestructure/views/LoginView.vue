<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Cleave from "cleave.js";

export default defineComponent({
  data() {
    return {
      password: "",
      email: "",
    };
  },

  mounted() {
    var cleave = new Cleave(".input-date", {
      date: true,
      delimiter: "-",
      datePattern: ["Y", "m", "d"],
    });
  },
});
</script>

<template>
  <form>
    email
    <input type="text" name="email" v-model="email" placeholder="email"/>

    password
    <input type="password" name="password" v-model="password" placeholder="password"/>

    <input class="input-date" type="text" placeholder="date"/>

    <button type="submit">guardar</button>
  </form>
</template>