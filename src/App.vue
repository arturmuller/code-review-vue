<script setup lang="ts">
import { reactive, ref } from "vue";
import CoffeeFetcher from "./components/CoffeeFetcher.vue";
import UserListFilter from "./components/UserListFilter.vue";

const users = reactive([
  { id: "a", name: "Mary", email: "mary@example.com" },
  { id: "b", name: "John", email: "john@example.com" },
  { id: "c", name: "Alex", email: "alex@example.com" },
]);

const kind = ref<"hot" | "cold">("hot");
</script>

<template>
  <div>
    <h1>Code Review (Vue.js)</h1>

    <h2>User List Filter</h2>

    <UserListFilter :users="users" />

    <h2>Coffee Fetcher</h2>
    <div>
      <button type="button" @click="kind = 'hot'">Hot</button>
      <button type="button" @click="kind = 'cold'">Cold</button>
    </div>

    <CoffeeFetcher :kind="kind" />
  </div>
</template>

<style>
:root {
  font-family: sans-serif;
}
</style>
