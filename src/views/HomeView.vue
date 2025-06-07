<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-1 bg-background">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 space-y-8">
            <StepIndicator />
            <BookingForm
              v-model:form-data="formData"
              :extra-options="extraOptions"
              @submit="handleSubmit"
            />
          </div>
          <div class="lg:col-span-1">
            <BookingSidebar
              :booking="bookingData"
              :extra-options="extraOptions"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import type { BookingData, ExtraOptions, BookingFormData } from '@/types/booking.ts';
import Navbar from '@/components/navbar/Navbar.vue';
import StepIndicator from '@/components/StepIndicator.vue';
import BookingForm from '@/components/BookingForm.vue';
import BookingSidebar from '@/components/BookingSidebar.vue';

const router = useRouter();

// Mock data - in a real app, this would come from an API
const bookingData: BookingData = reactive({
  name: 'Rafting',
  location: 'Una',
  address: 'Ulica Najboljeg Raftinga 4, Una, Hrvatska',
  rating: { rating: 4.8, outOf: 5, count: 127 },
  image: '/rafting.png',
  startDate: '2024-06-15',
  endDate: '2024-06-22',
  partySize: { adults: 2, children: 0 },
  price: { original: 500, discount: 134.5, total: 365.5 },
  tax: { vat: 91.1, tourismTax: 10 },
  cancellationPolicy: {
    freeCancellationBefore: '2024-05-30',
    cancellationFee: 100,
  },
});

const extraOptions: ExtraOptions = reactive({
  needTaxi: false,
  needCar: false,
});

// Form data and handlers
const formData: BookingFormData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  country: 'Croatia',
  countryCode: '+385',
  phone: '',
  bookingFor: 'main-guest',
  workTravel: 'no',
  needTaxi: false,
  needCar: false,
  specialRequests: '',
  paymentTiming: 'march-15',
});

const handleSubmit = () => {
  console.log('Form submitted', formData);
  // In a real app, this would submit to an API
  router.push('/confirmation');
};
</script>
