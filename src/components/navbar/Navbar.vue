<template>
  <header class="bg-secondary px-6 py-4">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="text-xl font-bold">
        {{ $t('app.title') }}
      </div>

      <!-- Language Switcher -->
      <LangSwitcher />
    </div>
  </header>
</template>

<script setup lang="ts">
import LangSwitcher from '@/components/LangSwitcher.vue'

defineOptions({
  name: 'AppNavbar'
})
</script>
