<script>
import { defineComponent } from "@vue/runtime-core";
import UserCollection from "@/app/users/domain/collections/UserCollection";

export default defineComponent({
  data() {
    return {
      users: new UserCollection([]),
    };
  },

  methods: {
    onStore() {
      this.users.push("jorge");
    },
  },
});
</script>

<template>
  <form @submit.prevent="onStore">
    <button>guardar</button>
  </form>

  <div v-for="user of [...this.users]" v-bind:key="user.name()">
    {{ user.name() }}
  </div>
</template>