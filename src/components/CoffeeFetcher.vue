<script setup lang="ts">
import { ref, onMounted } from "vue"

const props = defineProps<{ kind: string }>()

const items = ref<{ id: string; name: string }[] | null>()

onMounted(async () => {
  const response = await fetch(`https://api.sampleapis.com/coffee/${props.kind}`);
  items.value = await response.json()
})

</script>

<template>
  <div>
    <h2>Data</h2>

    <ul v-if="items">
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>
