<script setup>
import { RouterView } from 'vue-router'
import { useUserStore } from '@/stores/user'
import Appbar from '@/components/Appbar.vue'
import Footer from '@/components/Footer.vue'

const userStore = useUserStore()
</script>

<template>
  <Appbar v-if="userStore.userLoggedIn" />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <Footer v-if="userStore.userLoggedIn" />
</template>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0s lienar;
  opacity: 0;
}
</style>
