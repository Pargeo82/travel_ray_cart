<script setup lang="ts">
import AppNavbar from '@/components/navbar/Navbar.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppNavbar />
    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>
