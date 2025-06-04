<template>
  <div class="space-y-6">
    <!-- Activity Details -->
    <div class="bg-white rounded-lg p-6 shadow-sm">
      <div class="flex gap-4 mb-4">
        <img
          class="w-20 h-15 rounded object-cover"
          src="https://placehold.co/80x60/4a90e2/4a90e2"
          alt="Rafting activity"
        />
        <div class="flex-1">
          <div class="text-lg font-semibold text-gray-900 mb-1">Rafting na Zrmanji</div>
          <div class="flex items-center gap-1 mb-1">
            <div class="flex text-yellow-400">
              <i
                v-for="n in 5"
                :key="n"
                class="ti ti-star-filled text-sm"
              />
            </div>
            <span class="text-sm text-gray-600 ml-1">(48)</span>
          </div>
          <div class="text-xs text-gray-600">Adresa najboljih raftinga,</div>
          <div class="text-xs text-gray-600">Grad, Država</div>
        </div>
      </div>
    </div>

    <!-- Booking Details -->
    <div class="bg-white rounded-lg p-6 shadow-sm">
      <div class="text-lg font-semibold text-gray-900 mb-4">Your booking details</div>
      <div class="space-y-3 mb-4">
        <div class="flex justify-between">
          <div>
            <div class="text-sm font-medium text-gray-700">Start date</div>
            <div class="text-sm text-gray-900">Sat 1 May 2025</div>
            <div class="text-xs text-gray-600">08:00</div>
          </div>
          <div>
            <div class="text-sm font-medium text-gray-700">End date</div>
            <div class="text-sm text-gray-900">Sat 5 May 2025</div>
            <div class="text-xs text-gray-600">20:00</div>
          </div>
        </div>
        <div class="border-t border-gray-200 pt-3 mb-4">
          <div class="text-sm font-medium text-gray-700 mb-1">Total length:</div>
          <div class="text-sm text-gray-900">5 days</div>
        </div>
        <div class="border-t border-gray-200 pt-3">
          <div class="text-sm font-medium text-gray-700 mb-1">Trip is for:</div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-900">2 adults</span>
            <i class="ti ti-chevron-down text-base text-gray-600" />
          </div>
        </div>
      </div>

      <!-- Price Summary -->
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <div class="text-lg font-semibold text-gray-900 mb-4">Your price summary</div>
        <div class="space-y-3 mb-4">
          <div class="flex justify-between">
            <span class="text-sm text-gray-700">Original price</span>
            <span class="text-sm text-gray-900">€500</span>
          </div>
          <div class="flex justify-between">
            <span class="text-sm text-gray-700">Limited time discount</span>
            <span class="text-sm text-gray-900">€135.50</span>
          </div>
          <div class="text-xs text-green-600 underline cursor-pointer">Lorem ipsum discount</div>
        </div>
        <div class="bg-green-100 p-4 rounded mb-4">
          <div class="flex justify-between items-center">
            <div class="text-sm text-green-800">€500</div>
            <div class="text-right">
              <div class="text-lg font-semibold text-green-800">€364.50</div>
              <div class="text-xs text-green-800">Includes taxes and charges</div>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-200 pt-4 mb-4">
          <div class="text-base font-semibold text-gray-900 mb-3">Price information</div>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-sm text-gray-700">25% VAT</span>
              <span class="text-sm text-gray-900">€91.13</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-700">Tourism tax</span>
              <span class="text-sm text-gray-900">€10</span>
            </div>
            <div class="text-xs text-gray-600">Payable at the property</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Promo Code -->
    <div class="bg-white rounded-lg p-6 shadow-sm">
      <div class="text-lg font-semibold text-gray-900 mb-4">Promo code</div>
      <div class="mb-4">
        <input
          v-model="promoCode"
          type="text"
          placeholder="Enter promo code"
          class="w-full px-3 py-2 border border-gray-300 rounded text-sm"
        />
      </div>
      <button
        @click="applyPromoCode"
        class="w-full bg-green-500 text-white px-4 py-2 rounded text-sm font-medium transition-colors hover:bg-green-600"
      >
        Apply
      </button>
    </div>

    <!-- Cancellation Costs -->
    <div class="bg-white rounded-lg p-6 shadow-sm">
      <div class="text-lg font-semibold text-gray-900 mb-4">Costs of cancellation</div>
      <div class="space-y-3">
        <div class="text-sm text-gray-700">Free cancellation before 1 April</div>
        <div class="flex justify-between">
          <span class="text-sm text-gray-700">From 00:00 on 2 April</span>
          <span class="text-sm text-gray-900">€215</span>
        </div>
      </div>
    </div>

    <!-- Final Button -->
    <button
      @click="proceedToPayment"
      class="w-full bg-green-500 text-white px-6 py-3 rounded text-base font-semibold transition-colors hover:bg-green-600"
    >
      Next: Payment
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const promoCode = ref('');

const applyPromoCode = () => {
  // Apply promo code logic
  console.log('Applying promo code:', promoCode.value);
};

const proceedToPayment = () => {
  // Proceed to payment logic
  console.log('Proceeding to payment');
};
</script>
