<script setup lang="ts">
import { ref } from "vue";

type User = {
  id: string;
  name: string;
  email: string;
};

const props = defineProps<{
  users: User[];
}>();

const filteredUsers = ref<User[]>(props.users);

const handleInput = (event: Event) => {
  const element = event.target as HTMLInputElement;
  const value = element.value;

  filteredUsers.value = props.users.filter((user) => user.name === value);
};
</script>

<template>
  <div>
    <h2>User List Filter</h2>

    <input type="text" placeholder="Search users by name or email" @input="handleInput" />

    <ul>
      <li v-for="user in filteredUsers" :key="user.name">
        <div>Name: {{ user.name }}</div>
        <div>Email: {{ user.email }}</div>
      </li>
    </ul>
  </div>
</template>
