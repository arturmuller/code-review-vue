<script setup lang="ts">
import { ref } from "vue";
import CoffeeFetcher from "./components/CoffeeFetcher.vue";
import UserListFilter from "./components/UserListFilter.vue";

const usersA = [
  { id: "a", name: "Marie", email: "mary@seznam.cz" },
  { id: "b", name: "John", email: "john@gmail.com" },
  { id: "c", name: "Alex", email: "alex@hotmail.com" },
];

const usersB = [
  { id: "a", name: "Russel", email: "russel@seznam.cz" },
  { id: "b", name: "Taylor", email: "taylor@gmail.com" },
  { id: "c", name: "Kyle", email: "kyle@hotmail.com" },
];

const users = ref(usersA);

const kind = ref<"hot" | "cold">("hot");
</script>

<template>
  <div>
    <h1>Code Review (Vue.js)</h1>

    <div>
      <h2>State controls:</h2>

      <div>
        Users list:
        <button type="button" @click="users = usersA">User set A</button>
        <button type="button" @click="users = usersB">User set B</button>
      </div>
      <div>
        Coffee kind:
        <button type="button" @click="kind = 'hot'">Hot</button>
        <button type="button" @click="kind = 'cold'">Cold</button>
      </div>
    </div>

    <UserListFilter :users="users" />

    <CoffeeFetcher :kind="kind" />
  </div>
</template>

<style>
:root {
  font-family: sans-serif;
}
</style>
