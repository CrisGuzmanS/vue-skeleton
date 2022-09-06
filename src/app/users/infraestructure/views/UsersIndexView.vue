<script>
import { defineComponent } from "@vue/runtime-core";
import UserCollection from "@/app/users/domain/collections/UserCollection";
import UserRequester from "@/app/users/domain/requester/UserRequester";

export default defineComponent({
  data() {
    return {
      users: new UserCollection([]),
    };
  },

  async mounted() {
    this.users = await UserRequester.all();
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

  <div class="card" v-for="user of [...this.users]" v-bind:key="user.name()">
    <div class="card-body">
      <font-awesome-icon icon="fa-solid fa-user" /> {{ user.name() }}
    </div>
  </div>
</template>