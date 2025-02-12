<script setup lang="ts">
import { onMounted, ref } from "vue";
import { fetch } from "../utils/slowFetch";

const props = defineProps<{ kind: "cold" | "hot" }>();

const items = ref<{ id: string; name: string }[] | null>();

onMounted(async () => {
  const response = await fetch(`/${props.kind}.json`);
  items.value = await response.json();
});
</script>

<template>
  <h2>Coffee Fetcher</h2>
  <ul v-if="items">
    <li v-for="item in items" :key="item.id">{{ item.name }}</li>
  </ul>
</template>
