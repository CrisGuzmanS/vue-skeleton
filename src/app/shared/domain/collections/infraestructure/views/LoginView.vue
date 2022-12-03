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

  methods: {
    async onLogin(){
      console.log(this.password, this.email)

      const response = await this.axios.post('http://192.168.100.203:8000/api/login', {
        email: this.email,
        password: this.password
      })

      console.log(response)
    }
  }
});
</script>

<template>
  <form @submit.prevent="onLogin">
    email
    <input type="text" name="email" v-model="email" placeholder="email"/>

    password
    <input type="password" name="password" v-model="password" placeholder="password"/>

    <input class="input-date" type="text" placeholder="date"/>

    <button type="submit">guardar</button>
  </form>
</template>