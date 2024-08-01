<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const userStore = useUserStore()
const router = useRouter()

const email = ref('')
const password = ref('')

const handleLogin = () => {
  if (!email.value || !password.value) return

  const userCredentials = {
    email: email.value,
    password: password.value
  }

  try {
    userStore.login(userCredentials)
    router.push('/')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="flex h-screen flex-1 flex-col justify-center bg-gray-800 px-6 py-12 lg:px-8">
    <div class="text-center">
      <h1 class="text-5xl font-bold text-soft-white">DEMO SPA</h1>
      <p class="mt-4 text-2xl text-soft-white">Welcome to Demo SPA</p>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleLogin">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-soft-white">
            Email address
          </label>
          <div class="mt-2">
            <input
              v-model="email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              placeholder="Email address"
              required
              class="input-field block w-full rounded-sm p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-soft-white">
              Password
            </label>
          </div>
          <div class="mt-2">
            <input
              v-model="password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              placeholder="password"
              required
              class="input-field block w-full rounded-sm p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none"
            />
          </div>
        </div>

        <div class="flex justify-end">
          <button
            type="submit"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.text-soft-white {
  color: #f5f5f5; /* Soft white color */
}

.input-field {
  border: none; /* Remove border */
  box-shadow: none; /* Remove shadow */
}
</style>
