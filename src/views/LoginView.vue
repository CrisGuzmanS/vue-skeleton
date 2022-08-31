<template>
  <form @submit.prevent="onStore()">

      email
      <input type="text" name="email" v-model="password">

    password
    <input type="password" name="password" v-model="email">

    <button type="submit">guardar</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

class UserCollection {
  public users: any;

  constructor(users: any) {
    this.users = users;
  }

  static fromArray(array: any) {
    return new UserCollection(array);
  }
}

export default defineComponent({
  data() {
    return {
        password: '',
        email: '',
        users: new UserCollection([])
    };
  },

  methods: {
    onStore() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {this.users = new UserCollection(response.data)})
        .then( ()=>{ console.log(this.users); } )
    },
  },
});
</script>