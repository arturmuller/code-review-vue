<script setup lang="ts">
import { reactive } from "vue";
import UserList from "./components/UserList.vue";
import CoffeeFetcher from "./components/CoffeeFetcher.vue"

const users = reactive([
  { id: "a", name: "Mary", email: "mary@example.com" },
  { id: "b", name: "John", email: "john@example.com" },
  { id: "c", name: "Alex", email: "alex@example.com" },
]);
</script>

<template>
  <div>
    <h1>Ableneo Code Review</h1>
    <UserList :users="users" />
    <CoffeeFetcher kind="hot" />
  </div>
</template>
