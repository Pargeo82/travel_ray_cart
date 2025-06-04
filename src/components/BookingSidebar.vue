<template>
  <div>
    <!-- Activity Details -->
    <Card>
      <div class="flex gap-4 mb-4">
        <img
          class="w-20 h-15 rounded object-cover"
          src="https://placehold.co/80x60/4a90e2/4a90e2"
          alt="Rafting activity"
        />
        <div class="flex-1">
          <div class="h6 mb-1">Rafting na Zrmanji</div>
          <div class="flex items-center gap-1 mb-1">
            <div class="flex text-yellow-400">
              <i
                v-for="n in 5"
                :key="n"
                class="ti ti-star-filled Body2"
              />
            </div>
            <span class="Body2 ml-1">(48)</span>
          </div>
          <div class="Body2">Adresa najboljih raftinga,</div>
          <div class="Body2">Grad, Država</div>
        </div>
      </div>
    </Card>

    <!-- Booking Details -->
    <Card>
      <div class="h6 mb-4">Your booking details</div>
      <div class="space-y-3 mb-4">
        <div class="flex justify-between">
          <div>
            <div class="Body2">Start date</div>
            <div class="Body1_bold">Sat 1 May 2025</div>
            <div class="Body1_explanation">08:00</div>
          </div>
          <div>
            <div class="Body2">End date</div>
            <div class="Body1_bold">Sat 5 May 2025</div>
            <div class="Body1_explanation">20:00</div>
          </div>
        </div>
        <div class="border-t border-text-primary-offset pt-3 mb-4">
          <div class="Body2 mb-1">Total length:</div>
          <div class="Body1_bold">5 days</div>
        </div>
        <div class="border-t border-text-primary-offset pt-3">
          <div class="Body2 mb-1">Trip is for:</div>
          <div class="flex items-center justify-between">
            <span class="Body1_bold">2 adults</span>
            <i class="ti ti-chevron-down Body1" />
          </div>
        </div>
      </div>
    </Card>

    <!-- Price Summary -->
    <Card>
      <div class="h6 mb-4">Your price summary</div>
      <div class="space-y-3 mb-4">
        <div class="flex justify-between">
          <span class="Body1">Original price</span>
          <span class="Body1">€500</span>
        </div>
        <div class="flex justify-between">
          <span class="Body1">Limited time discount</span>
          <span class="Body1">€135.50</span>
        </div>
        <div class="Body2 text-secondary mt-[-0.5rem]">Lorem ipsum discount</div>
      </div>
      <div class="bg-secondary bg-opacity-10 p-4 rounded mb-4">
        <div class="flex justify-between items-center">
          <div class="h6">Total</div>
          <div class="text-right">
            <div class="Body2 text-secondary">€500</div>
            <div class="h6 text-secondary">€364.50</div>
            <div class="Body2 text-secondary">Includes taxes and charges</div>
          </div>
        </div>
      </div>
      <div class="border-t border-text-primary-offset pt-4 mb-4">
        <div class="h6 mb-3">Price information</div>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span class="Body1">25% VAT</span>
            <span class="Body1">€91.13</span>
          </div>
          <div class="flex justify-between">
            <span class="Body1">Tourism tax</span>
            <span class="Body1">€10</span>
          </div>
          <div class="Body2 mt-[-0.5rem]">Payable at the property</div>
        </div>
      </div>
    </Card>
  </div>

  <!-- Promo Code -->
  <Card>
    <div class="h6 mb-4">Promo code</div>
    <div class="mb-4">
      <input
        v-model="promoCode"
        type="text"
        placeholder="Enter promo code"
        class="w-full px-3 py-2 border border-text-primary-offset rounded Body2"
      />
    </div>
    <button
      @click="applyPromoCode"
      class="w-full bg-secondary text-text-contrast px-4 py-2 rounded Body2 Body1_bold transition-colors hover:bg-opacity-90"
    >
      Apply
    </button>
  </Card>

  <!-- Cancellation Costs -->
  <Card>
    <div class="h6 mb-4">Costs of cancellation</div>
    <div class="space-y-3">
      <div class="Body2">Free cancellation before 1 April</div>
      <div class="flex justify-between">
        <span class="Body2">From 00:00 on 2 April</span>
        <span class="Body2">€215</span>
      </div>
    </div>
  </Card>

  <!-- Final Button -->
  <button
    @click="proceedToPayment"
    class="w-full bg- secondary text-text-contrast px-6 py-3 rounded Body1 Body1_bold transition-colors hover:bg-opacity-90"
  >
    Next: Payment
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Card } from '@/components/ui/card';

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
