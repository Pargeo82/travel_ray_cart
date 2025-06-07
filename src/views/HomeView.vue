<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-1 bg-background">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 space-y-8">
            <StepIndicator />
            <BookingForm />
          </div>
          <div class="lg:col-span-1">
            <BookingSidebar />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/navbar/Navbar.vue';
import StepIndicator from '@/components/StepIndicator.vue';
import BookingForm from '@/components/BookingForm.vue';
import BookingSidebar from '@/components/BookingSidebar.vue';
</script>
