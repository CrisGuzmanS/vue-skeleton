<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import UserCollection from "@/app/users/domain/UserCollection";
import { isProxy, toRaw } from "vue";

export default defineComponent({
  data() {
    return {
      password: "",
      email: "",
      users: new UserCollection(["1", "2", "3"]),
    };
  },

  methods: {
    onStore() {
    
    this.users = new UserCollection([1,2,3,4,5,6])

    },
  },
});
</script>

<template>
  <form @submit.prevent="onStore()">
    email
    <input type="text" name="email" v-model="password" />

    password
    <input type="password" name="password" v-model="email" />

    <button type="submit">guardar</button>

    <div v-for="user of [...this.users]" v-bind:key="user.name()">
      {{ user.name() }}
    </div>
  </form>
</template>