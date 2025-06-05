<template>
  <div>
    <!-- Activity Details -->
    <Card>
      <div class="flex gap-4">
        <img
          class="h-[75px] object-cover"
          src="/rafting.png"
          alt="Rafting activity"
        />
        <div class="flex-1">
          <div class="h6 mb-1">Rafting na Zrmanji</div>
          <div class="flex items-center gap-1 mb-1">
            <div class="flex text-secondary">
              <StarFilledIcon
                v-for="n in 5"
                :key="n"
                class="w-4 h-4"
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
        <Separator
          class="bg-text-primary-offset/40 mt-8 mb-6"
          decorative
        />
        <div>
          <div class="Body2 mb-1">Total length:</div>
          <div class="Body1_bold">5 days</div>
        </div>
        <Separator
          class="bg-text-primary-offset/40 mt-8 mb-6"
          decorative
        />
        <div>
          <div class="Body2 mb-1">Trip is for:</div>
          <div class="flex items-center justify-between">
            <span class="Body1_bold">2 adults</span>
            <i class="ti ti-chevron-down Body1" />
          </div>
        </div>
      </div>
    </Card>

    <!-- Price Summary -->
    <Card class="px-0">
      <div class="px-6">
        <div class="h6 mb-4">Your price summary</div>
        <div class="space-y-3">
          <div class="flex justify-between">
            <span class="Body1">Original price</span>
            <span class="Body1">€500</span>
          </div>
          <div class="flex justify-between">
            <span class="Body1">Limited time discount</span>
            <span class="Body1">€135.50</span>
          </div>
          <div class="Body2 text-secondary mt-[-0.5rem] mb-4">Lorem ipsum discount</div>
        </div>
      </div>

      <!-- Full Width Total Section -->
      <div class="bg-secondary/50 p-4 w-full">
        <div class="flex justify-between items-center px-4">
          <div class="h6">Total</div>
          <div class="text-right">
            <div class="Body2 text-secondary">€500</div>
            <div class="h6 text-secondary">€364.50</div>
            <div class="Body2 text-secondary">Includes taxes and charges</div>
          </div>
        </div>
      </div>

      <div class="px-6">
        <div class="h6 mb-3 mt-6">Price information</div>
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
    <div class="mb-4 flex gap-2">
      <CustomInput
        v-model="promoCode"
        type="text"
        placeholder="Enter promo code"
        class="w-full rounded Body2"
      />
      <Button
        @click="applyPromoCode"
        class="bg-secondary text-text-contrast px-4 py-2 rounded Body1_bold transition-colors hover:bg-opacity-90"
      >
        Apply
      </Button>
    </div>
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
  <div class="flex justify-end">
    <Button
      @click="proceedToPayment"
      class="bg-secondary text-text-contrast px-6 py-3 rounded Body1_bold transition-colors hover:bg-opacity-90"
    >
      Next: Payment
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { StarFilledIcon } from '@radix-icons/vue';
import { Button, Card, CustomInput, Separator } from '@/components/ui';

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
