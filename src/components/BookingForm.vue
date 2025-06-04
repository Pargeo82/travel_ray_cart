<template>
  <div class="space-y-6">
    <!-- Customer Details -->
    <div class="bg-white rounded-lg p-8 shadow-sm">
      <div class="text-2xl font-semibold text-gray-900 mb-6">Enter your details</div>
      <div class="grid grid-cols-1 gap-4 mb-4">
        <div>
          <div class="text-sm font-medium text-gray-700 mb-2">
            <span>First Name</span>
            <span class="text-red-500">*</span>
          </div>
          <input
            v-model="formData.firstName"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded text-sm"
          />
        </div>
        <div>
          <div class="text-sm font-medium text-gray-700 mb-2">
            <span>Last name</span>
            <span class="text-red-500">*</span>
          </div>
          <input
            v-model="formData.lastName"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded text-sm"
          />
        </div>
      </div>
      <div class="mb-4">
        <div class="text-sm font-medium text-gray-700 mb-2">
          <span>Email</span>
          <span class="text-red-500">*</span>
        </div>
        <input
          v-model="formData.email"
          type="email"
          class="w-full px-3 py-2 border border-gray-300 rounded text-sm"
        />
      </div>
      <div class="mb-4">
        <div class="text-sm font-medium text-gray-700 mb-2">
          <span>Country</span>
          <span class="text-red-500">*</span>
        </div>
        <select
          v-model="formData.country"
          class="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white"
        >
          <option value="Croatia">Croatia</option>
        </select>
      </div>
      <div class="mb-6">
        <div class="text-sm font-medium text-gray-700 mb-2">Phone number</div>
        <div class="flex">
          <select
            v-model="formData.countryCode"
            class="px-3 py-2 border border-gray-300 rounded-l text-sm bg-white border-r"
          >
            <option value="+385">HR +385</option>
          </select>
          <input
            v-model="formData.phone"
            type="tel"
            class="flex-1 px-3 py-2 border border-gray-300 rounded-r text-sm"
          />
        </div>
      </div>
      <div class="mb-6">
        <div class="text-base font-semibold text-gray-900 mb-4">Who are you booking for?</div>
        <div class="space-y-3">
          <label class="flex items-center gap-3 cursor-pointer">
            <input
              v-model="formData.bookingFor"
              type="radio"
              value="main-guest"
              class="w-4 h-4 text-green-500 border-gray-300"
            />
            <span class="text-sm text-gray-700">I am the main guest</span>
          </label>
          <label class="flex items-center gap-3 cursor-pointer">
            <input
              v-model="formData.bookingFor"
              type="radio"
              value="someone-else"
              class="w-4 h-4 text-green-500 border-gray-300"
            />
            <span class="text-sm text-gray-700"> Booking for someone else </span>
          </label>
        </div>
      </div>
      <div class="mb-6">
        <div class="text-base font-semibold text-gray-900 mb-4">Are you travelling for work?</div>
        <div class="flex gap-6">
          <label class="flex items-center gap-3 cursor-pointer">
            <input
              v-model="formData.workTravel"
              type="radio"
              value="yes"
              class="w-4 h-4 text-green-500 border-gray-300"
            />
            <span class="text-sm text-gray-700">Yes</span>
          </label>
          <label class="flex items-center gap-3 cursor-pointer">
            <input
              v-model="formData.workTravel"
              type="radio"
              value="no"
              class="w-4 h-4 text-green-500 border-gray-300"
            />
            <span class="text-sm text-gray-700">No</span>
          </label>
        </div>
      </div>
    </div>

    <!-- Add to Booking -->
    <div class="bg-white rounded-lg p-8 shadow-sm">
      <div class="text-2xl font-semibold text-gray-900 mb-6">Add to your booking</div>
      <div class="space-y-4 mb-6">
        <label class="flex items-center gap-3 cursor-pointer">
          <input
            v-model="formData.needTaxi"
            type="checkbox"
            class="w-4 h-4 text-green-500 border-gray-300 rounded-sm"
          />
          <span class="text-sm text-gray-700"> I need a taxi / shuttle ride </span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input
            v-model="formData.needCar"
            type="checkbox"
            class="w-4 h-4 text-green-500 border-gray-300 rounded-sm"
          />
          <span class="text-sm text-gray-700"> I would like to rent a car </span>
        </label>
      </div>
      <div>
        <div class="text-sm font-medium text-gray-700 mb-2">Special requests / dietary restrictions</div>
        <textarea
          v-model="formData.specialRequests"
          class="w-full px-3 py-2 border border-gray-300 rounded text-sm h-30 resize-none"
        />
      </div>
    </div>

    <!-- Payment -->
    <div class="bg-white rounded-lg p-8 shadow-sm">
      <div class="text-2xl font-semibold text-gray-900 mb-6">Payment</div>
      <div class="space-y-3">
        <label class="flex items-center gap-3 cursor-pointer">
          <input
            v-model="formData.paymentTiming"
            type="radio"
            value="march-15"
            class="w-4 h-4 text-green-500 border-gray-300"
          />
          <span class="text-sm text-gray-700">Pay on 15 March</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input
            v-model="formData.paymentTiming"
            type="radio"
            value="now"
            class="w-4 h-4 text-green-500 border-gray-300"
          />
          <span class="text-sm text-gray-700">Pay now</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const formData = reactive({
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
</script>
