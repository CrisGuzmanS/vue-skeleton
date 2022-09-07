<script>
import { defineComponent } from "@vue/runtime-core";
import UserCollection from "@/app/users/domain/collections/UserCollection";
import UserRequester from "@/app/users/domain/requester/UserRequester";
import UserItemComponent from "@/app/users/infraestructure/components/UserItemComponent.vue";

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

    removeUser(user) {
      console.log(user);
    },
  },

  components: {
    UserItemComponent,
  },

  emits: [
    'userDeleted'
  ]
});
</script>

<template>
  <form @submit.prevent="onStore">
    <button>guardar</button>
  </form>

  <div v-for="user of [...this.users]" v-bind:key="user">
    <UserItemComponent :user="user" @userDeleted="removeUser" />
  </div>
</template>