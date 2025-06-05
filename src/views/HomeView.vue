<template>
  <div class="min-h-screen bg-(--color-background)">
    <BookingHeader />
    <div class="max-w-7xl mx-auto px-6 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <StepIndicator />
          <BookingForm />
        </div>
        <div class="lg:col-span-1 md:max-w-[335px]">
          <BookingSidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BookingHeader from '../components/BookingHeader.vue';
import StepIndicator from '../components/StepIndicator.vue';
import BookingForm from '../components/BookingForm.vue';
import BookingSidebar from '../components/BookingSidebar.vue';
</script>
