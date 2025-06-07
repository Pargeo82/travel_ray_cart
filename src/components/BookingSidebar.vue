<template>
  <div>
    <!-- Activity Details -->
    <Card>
      <div class="flex gap-4">
        <img
          class="h-[75px] object-cover"
          :src="booking.image"
          :alt="$t('bookingSidebar.activityDetails')"
        />
        <div class="flex-1">
          <div class="h6 mb-1">{{ booking.name }}</div>
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
          <div class="Body2">{{ booking.address }}</div>
        </div>
      </div>
    </Card>

    <!-- Booking Details -->
    <Card>
      <div class="h6 mb-4">{{ $t('bookingSidebar.yourBookingDetails') }}</div>
      <div class="space-y-3 mb-4">
        <div class="flex justify-between">
          <div>
            <div class="Body2">{{ $t('bookingSidebar.startDate') }}</div>
            <div class="Body1_bold">{{ formatDate(booking.startDate) }}</div>
            <div class="Body1_explanation">{{ formatTime(booking.startDate) }}</div>
          </div>
          <div>
            <div class="Body2">{{ $t('bookingSidebar.endDate') }}</div>
            <div class="Body1_bold">{{ formatDate(booking.endDate) }}</div>
            <div class="Body1_explanation">{{ formatTime(booking.endDate) }}</div>
          </div>
        </div>
        <Separator
          class="bg-text-primary-offset/40 mt-4 mb-2"
          decorative
        />
        <div>
          <div class="Body2 mb-1">{{ $t('bookingSidebar.totalLength') }}:</div>
          <div class="Body1_bold">{{ calculateDuration(booking.startDate, booking.endDate) }}</div>
        </div>
        <Separator
          class="bg-text-primary-offset/40 mt-4 mb-2"
          decorative
        />
        <div>
          <div class="Body2 mb-1">{{ $t('bookingSidebar.tripIsFor') }}:</div>
          <div class="flex items-center justify-between">
            <span class="Body1_bold">
              {{ booking.partySize.adults }} {{ booking.partySize.adults === 1 ? $t('bookingSidebar.adult') : $t('bookingSidebar.adults') }}
              <span v-if="booking.partySize.children > 0">
                , {{ booking.partySize.children }} {{ booking.partySize.children === 1 ? $t('bookingSidebar.child') : $t('bookingSidebar.children') }}
              </span>
            </span>
            <i class="ti ti-chevron-down Body1" />
          </div>
        </div>
      </div>
    </Card>

    <!-- Price Summary -->
    <Card class="px-0">
      <div class="px-6">
        <div class="h6 mb-4">{{ $t('bookingSidebar.priceSummary') }}</div>
        <div class="space-y-3">
          <div class="flex justify-between">
            <span class="Body1">{{ $t('bookingSidebar.originalPrice') }}</span>
            <span class="Body1">{{ formatCurrency(booking.price.original) }}</span>
          </div>
          <div class="flex justify-between">
            <span class="Body1">{{ $t('bookingSidebar.limitedTimeDiscount') }}</span>
            <span class="Body1">-{{ formatCurrency(booking.price.discount) }}</span>
          </div>
          <div class="Body2 text-secondary mt-[-0.5rem] mb-2">
            {{ $t('bookingSidebar.loremIpsumDiscount') }}
          </div>
        </div>
      </div>

      <!-- Full Width Total Section -->
      <div class="bg-secondary/50 p-4 w-full">
        <div class="flex justify-between items-center px-4">
          <div class="h6">{{ $t('bookingSidebar.total') }}</div>
          <div class="text-right">
            <div class="Body2 text-secondary">{{ booking.location }}</div>
            <div class="h6 text-secondary">{{ formatCurrency(booking.price.total) }}</div>
            <div class="Body2 text-secondary">
              {{ $t('bookingSidebar.includesTaxesAndCharges') }}
            </div>
          </div>
        </div>
      </div>

      <div class="px-6">
        <div class="h6 mb-3 mt-6">{{ $t('bookingSidebar.priceInformation') }}</div>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span class="Body1">{{ $t('bookingSidebar.vat') }}</span>
            <span class="Body1">{{ formatCurrency(booking.tax.vat) }}</span>
          </div>
          <div class="flex justify-between">
            <span class="Body1">{{ $t('bookingSidebar.tourismTax') }}</span>
            <span class="Body1">{{ formatCurrency(booking.tax.tourismTax) }}</span>
          </div>
          <div class="Body2 mt-[-0.5rem]">
            {{ $t('bookingSidebar.payableAtProperty') }}
          </div>
        </div>
      </div>
    </Card>
  </div>

  <!-- Promo Code -->
  <Card>
    <div class="h6 mb-4">{{ $t('bookingSidebar.promoCode.title') }}</div>
    <div class="mb-4 flex gap-2">
      <CustomInput
        v-model="promoCode"
        type="text"
        :placeholder="$t('bookingSidebar.promoCode.placeholder')"
        class="w-full rounded Body2"
      />
      <Button
        variant="secondary"
        @click="applyPromoCode"
      >
        {{ $t('bookingSidebar.promoCode.apply') }}
      </Button>
    </div>
  </Card>

  <!-- Cancellation Costs -->
  <Card>
    <div class="h6 mb-4">{{ $t('bookingSidebar.cancellationCosts') }}</div>
    <div class="space-y-3">
      <div class="Body2">
        {{ $t('bookingSidebar.freeCancellationBefore', { date: formatDate(booking.cancellationPolicy.freeCancellationBefore) }) }}
      </div>
      <div class="flex justify-between">
        <span class="Body2">
          {{ $t('bookingSidebar.freeCancellationFrom', { date: formatDate(booking.cancellationPolicy.freeCancellationBefore) }) }}
        </span>
        <span class="Body2">{{ formatCurrency(booking.cancellationPolicy.cancellationFee) }}</span>
      </div>
    </div>
  </Card>

  <!-- Final Button -->
  <div class="flex justify-end">
    <Button
      variant="secondary"
      @click="proceedToPayment"
    >
      {{ $t('bookingSidebar.nextPayment') }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { StarFilledIcon } from '@radix-icons/vue';
import { Button, Card, CustomInput, Separator } from '@/components/ui';
import type { BookingData, ExtraOptions } from '@/types/booking.ts';

const { t: $t } = useI18n();

defineProps<{
  booking: BookingData;
  extraOptions: ExtraOptions;
}>();

const { locale } = useI18n();

const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    localeMatcher: 'best fit'
  };
  return new Date(dateString).toLocaleDateString(locale.value, options);
};

const formatTime = (dateString: string): string => {
  if (!dateString) return '';
  const options: Intl.DateTimeFormatOptions = { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false
  };
  return new Date(dateString).toLocaleTimeString(locale.value, options);
};

const calculateDuration = (start: string, end: string): string => {
  if (!start || !end) return '0 days';
  const startDate = new Date(start).getTime();
  const endDate = new Date(end).getTime();
  const diffTime = Math.abs(endDate - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return `${diffDays} ${diffDays === 1 ? $t('bookingSidebar.day') : $t('bookingSidebar.days')}`;
};

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

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
