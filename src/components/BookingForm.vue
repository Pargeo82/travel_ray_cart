<template>
  <form
    @submit="handleSubmit"
    class="space-y-6"
  >
    <!-- Customer Details -->
    <Card>
      <div class="h5 mb-6">{{ $t('bookingForm.enterDetails') }}</div>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <CustomInput
          v-model="localFormData.firstName"
          :label="$t('bookingForm.firstName')"
          required
        />
        <CustomInput
          v-model="localFormData.lastName"
          :label="$t('bookingForm.lastName')"
          required
        />
      </div>
      <div class="w-1/2 pr-2 mb-4">
        <CustomInput
          v-model="localFormData.email"
          :label="$t('bookingForm.email')"
          type="email"
          required
        />
      </div>
      <div class="w-1/2 pr-2 mb-4">
        <CustomSelect
          v-model="localFormData.country"
          :label="$t('bookingForm.country')"
          :options="[
            { value: 'croatia', label: $t('bookingForm.countries.croatia') },
            { value: 'slovenia', label: $t('bookingForm.countries.slovenia') },
            { value: 'other', label: $t('bookingForm.countries.other') },
          ]"
          required
        />
      </div>
      <div class="w-1/2 pr-2 mb-4">
        <div class="Body1 mb-1">
          <span>{{ $t('bookingForm.phoneNumber') }}</span>
          <span class="text-red-500">{{ $t('bookingForm.requiredField') }}</span>
        </div>
        <div class="flex gap-2">
          <div class="w-30">
            <CustomSelect
              v-model="localFormData.countryCode"
              :options="[
                { value: '+385', label: 'HR +385' },
                { value: '+386', label: 'SI +386' },
                { value: 'other', label: 'Other' },
              ]"
              select-class="h-10"
            />
          </div>
          <div class="flex-1">
            <CustomInput
              v-model="localFormData.phone"
              type="tel"
              input-class="w-full"
            />
          </div>
        </div>
      </div>
      <Separator
        class="bg-text-primary-offset/40 mt-8 mb-6"
        decorative
      />
      <div class="mb-6">
        <div class="h6 mb-4">{{ $t('bookingForm.bookingFor.title') }}</div>
        <RadioGroup
          v-model="localFormData.bookingFor"
          default-value="myself"
          :orientation="'vertical'"
        >
          <div class="flex items-center space-x-2 Body1">
            <RadioGroupItem
              id="r1"
              value="myself"
            />
            <Label for="r1">{{ $t('bookingForm.bookingFor.myself') }}</Label>
          </div>
          <div class="flex items-center space-x-2 Body1">
            <RadioGroupItem
              id="r2"
              value="someone-else"
            />
            <Label for="r2">{{ $t('bookingForm.bookingFor.someoneElse') }}</Label>
          </div>
        </RadioGroup>
      </div>
      <Separator
        class="bg-text-primary-offset/40 mt-8 mb-6"
        decorative
      />
      <div class="mb-6">
        <div class="h6 text-text-primary mb-4">{{ $t('bookingForm.workTravel.title') }}</div>
        <RadioGroup
          v-model="localFormData.workTravel"
          default-value="no"
          class="flex gap-6"
        >
          <div class="flex items-center space-x-2">
            <RadioGroupItem
              id="work-yes"
              value="yes"
            />
            <Label
              for="work-yes"
              class="Body2"
            >
              {{ $t('bookingForm.workTravel.yes') }}
            </Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem
              id="work-no"
              value="no"
            />
            <Label
              for="work-no"
              class="Body2"
            >
              {{ $t('bookingForm.workTravel.no') }}
            </Label>
          </div>
        </RadioGroup>
      </div>
    </Card>

    <!-- Add to Booking -->
    <Card>
      <div class="h5 text-text-primary mb-6">{{ $t('bookingForm.addToBooking') }}</div>
      <div class="space-y-4 mb-6">
        <div class="flex items-center space-x-2">
          <Checkbox
            id="taxi"
            v-model:checked="localFormData.needTaxi"
          />
          <label
            for="taxi"
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 Body2"
          >
            {{ $t('bookingForm.extras.taxi') }}
          </label>
        </div>
        <div class="flex items-center space-x-2">
          <Checkbox
            id="car"
            v-model:checked="localFormData.needCar"
          />
          <label
            for="car"
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 Body2"
          >
            {{ $t('bookingForm.extras.carRental') }}
          </label>
        </div>
      </div>
      <div>
        <CustomTextarea
          v-model="localFormData.specialRequests"
          :label="$t('bookingForm.specialRequests')"
          textarea-class="h-30"
        />
      </div>
    </Card>

    <!-- Payment -->
    <Card>
      <div class="h5 text-text-primary mb-6">{{ $t('bookingForm.payment') }}</div>
      <RadioGroup
        v-model="localFormData.paymentTiming"
        :orientation="'vertical'"
      >
        <div class="flex items-center space-x-2">
          <RadioGroupItem
            id="pay-later"
            value="march-15"
          />
          <Label
            for="pay-later"
            class="Body2"
          >
            {{ $t('bookingForm.paymentOptions.payLater') }}
          </Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem
            id="pay-now"
            value="now"
          />
          <Label
            for="pay-now"
            class="Body2"
          >
            {{ $t('bookingForm.paymentOptions.payNow') }}
          </Label>
        </div>
      </RadioGroup>
    </Card>
  </form>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { BookingFormData } from '@/types/booking';
import {
  Card,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Label,
  CustomInput,
  CustomTextarea,
  CustomSelect,
  Separator,
} from '@/components/ui';

const props = defineProps<{
  formData: BookingFormData;
  extraOptions: {
    needTaxi: boolean;
    needCar: boolean;
  };
}>();

const emit = defineEmits<{
  (e: 'update:formData', value: BookingFormData): void;
  (e: 'submit'): void;
}>();

const localFormData = computed<BookingFormData>({
  get: () => props.formData,
  set: (value: BookingFormData) => emit('update:formData', value),
});

const handleSubmit = (e: Event) => {
  e.preventDefault();
  emit('submit');
};
</script>
