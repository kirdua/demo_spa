<script setup>
import { computed } from 'vue'

const currentDate = computed(() => {
  return new Date().toLocaleDateString()
})
</script>
<template>
  <footer class="fixed bottom-0 left-0 w-full bg-gray-200 p-4 text-center border-t border-gray-300">
    <p>{{ currentDate }} &COPY;</p>
  </footer>
</template>

<style scoped>
footer {
  background-color: #f1f1f1;
  padding: 1em;
  text-align: center;
  border-top: 1px solid #ccc;
}
</style>
