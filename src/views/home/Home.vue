<script setup>
import { onMounted, ref } from 'vue'
import { useDogStore } from '@/stores/dog'

const dogStore = useDogStore()
const text = ref(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
)

onMounted(() => {
  getDogImage()
})

const getDogImage = async () => {
  try {
    await dogStore.getRandomDogImage()
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="flex flex-col md:flex-row items-center p-4 h-screen overflow-y-auto">
    <div class="w-full md:w-1/3 flex flex-col items-center">
      <img
        v-if="dogStore.currentDogImage"
        :src="dogStore.currentDogImage"
        alt="image of a dog"
        class="w-full h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none shadow-md"
      />
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        width="360"
        height="250"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
      <button
        @click="getDogImage"
        class="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Next image
      </button>
    </div>
    <div class="w-full md:w-2/3 p-4">
      <p class="text-lg font-semibold">{{ text }}</p>
    </div>
  </div>
</template>
