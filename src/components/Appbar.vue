<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const handleLogout = () => {
  try {
    userStore.logout()
    router.push('/login')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <nav
    class="flex items-center bg-gray-50 dark:bg-gray-800 dark:border-gray-700 h-[80px] border-gray-200"
  >
    <div class="text-2xl text-white ml-4">Demo spa</div>
    <div class="ml-auto flex items-center text-white mx-4">
      <span class="mr-4">{{ userStore.userInfo?.userInfo }}</span>
      <button
        class="flex items-center text-white font-medium hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-lg px-4 py-2"
        aria-label="sign out"
        @click="handleLogout"
      >
        Sign out
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-5 w-5 ml-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
          />
        </svg>
      </button>
    </div>
  </nav>
</template>
