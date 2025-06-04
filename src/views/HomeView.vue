<template>
  <div class="min-h-screen bg-gray-100 font-[Inter,sans-serif]">
    <BookingHeader />
    <div class="max-w-7xl mx-auto px-6 py-8">
      <StepIndicator :steps="steps" />
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <BookingForm />
        </div>
        <div class="lg:col-span-1">
          <BookingSidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BookingHeader from '../components/BookingHeader.vue';
import StepIndicator, { type Step } from '../components/StepIndicator.vue';
import BookingForm from '../components/BookingForm.vue';
import BookingSidebar from '../components/BookingSidebar.vue';

const steps: Step[] = [
  {
    number: 1,
    title: 'Customer Information',
    isActive: true,
    isCompleted: false,
  },
  {
    number: 2,
    title: 'Payment Information',
    isActive: false,
    isCompleted: false,
  },
  {
    number: 3,
    title: 'Finished',
    isActive: false,
    isCompleted: false,
  },
];
</script>
