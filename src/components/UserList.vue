<script setup lang="ts">
type User = {
  id: string;
  name: string;
  email: string;
};

const props = defineProps<{
  users: User[];
}>();

</script>

<template>
  <div>
    <input type="text" placeholder="Search users by name or email" />
    <ul>
      <li v-for="user in props.users" :key="user.id">
        <div>Name: {{ user.name }}</div>
        <div>Email: {{ user.email }}</div>
      </li>
    </ul>
  </div>
</template>
