<template>
  <form
    @submit="handleSubmit"
    class="space-y-6"
  >
    <!-- Customer Details -->
    <Card
      v-if="visibility?.['customer-details']"
      class="relative"
    >
      <DeleteButton
        v-if="isEditing"
        component-id="customer-details"
        :is-editing="isEditing"
        @remove="emitRemove"
      />
      <div class="h5 mb-6">{{ $t('bookingForm.enterDetails') }}</div>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div
          v-if="visibility?.['form-first-name']"
          class="relative"
        >
          <DeleteButton
            v-if="isEditing"
            component-id="form-first-name"
            :is-editing="isEditing"
            @remove="emitRemove"
          />
          <CustomInput
            v-model="localFormData.firstName"
            :label="$t('bookingForm.firstName')"
            required
          />
        </div>
        <div
          v-if="visibility?.['form-last-name']"
          class="relative"
        >
          <DeleteButton
            v-if="isEditing"
            component-id="form-last-name"
            :is-editing="isEditing"
            @remove="emitRemove"
          />
          <CustomInput
            v-model="localFormData.lastName"
            :label="$t('bookingForm.lastName')"
            required
          />
        </div>
      </div>
      <div
        v-if="visibility?.['form-email']"
        class="w-1/2 pr-2 mb-4 relative"
      >
        <DeleteButton
          v-if="isEditing"
          component-id="form-email"
          :is-editing="isEditing"
          @remove="emitRemove"
        />
        <CustomInput
          v-model="localFormData.email"
          :label="$t('bookingForm.email')"
          type="email"
          required
        />
      </div>
      <div
        v-if="visibility?.['form-country']"
        class="w-1/2 pr-2 mb-4 relative"
      >
        <DeleteButton
          v-if="isEditing"
          component-id="form-country"
          :is-editing="isEditing"
          @remove="emitRemove"
        />
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
      <div
        v-if="visibility?.['form-phone']"
        class="w-1/2 pr-2 mb-4 relative"
      >
        <DeleteButton
          v-if="isEditing"
          component-id="form-phone"
          :is-editing="isEditing"
          @remove="emitRemove"
        />
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
      <div
        v-if="visibility?.['form-booking-for']"
        class="mb-6 relative"
      >
        <Separator
          class="bg-text-primary-offset/40 mt-8 mb-6"
          decorative
        />
        <DeleteButton
          v-if="isEditing"
          component-id="form-booking-for"
          :is-editing="isEditing"
          @remove="emitRemove"
        />
        <div class="h6 mb-4">{{ $t('bookingForm.bookingFor.title') }}</div>
        <RadioGroup
          v-model="localFormData.bookingFor"
          default-value="myself"
          orientation="vertical"
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
      <div
        v-if="visibility?.['form-work-travel']"
        class="mb-6 relative"
      >
        <Separator
          class="bg-text-primary-offset/40 mt-8 mb-6"
          decorative
        />
        <DeleteButton
          v-if="isEditing"
          component-id="form-work-travel"
          :is-editing="isEditing"
          @remove="emitRemove"
        />
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
    <Card
      v-if="visibility?.['add-to-booking']"
      class="relative"
    >
      <DeleteButton
        v-if="isEditing"
        component-id="add-to-booking"
        :is-editing="isEditing"
        @remove="emitRemove"
      />
      <div class="h5 text-text-primary mb-6">{{ $t('bookingForm.addToBooking') }}</div>
      <div class="space-y-4 mb-6">
        <div
          v-if="visibility?.['form-taxi-option']"
          class="flex items-center space-x-2 relative"
        >
          <DeleteButton
            v-if="isEditing"
            component-id="form-taxi-option"
            :is-editing="isEditing"
            @remove="emitRemove"
          />
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
        <div
          v-if="visibility?.['form-car-option']"
          class="flex items-center space-x-2 relative"
        >
          <DeleteButton
            v-if="isEditing"
            component-id="form-car-option"
            :is-editing="isEditing"
            @remove="emitRemove"
          />
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
      <div
        v-if="visibility?.['form-special-requests']"
        class="relative"
      >
        <DeleteButton
          v-if="isEditing"
          component-id="form-special-requests"
          :is-editing="isEditing"
          @remove="emitRemove"
        />
        <CustomTextarea
          v-model="localFormData.specialRequests"
          :label="$t('bookingForm.specialRequests')"
          textarea-class="h-30"
        />
      </div>
    </Card>

    <!-- Payment -->
    <Card
      v-if="visibility?.['payment']"
      class="relative"
    >
      <DeleteButton
        v-if="isEditing"
        component-id="payment"
        :is-editing="isEditing"
        @remove="emitRemove"
      />
      <div class="h5 text-text-primary mb-6">{{ $t('bookingForm.payment') }}</div>
      <RadioGroup
        v-model="localFormData.paymentTiming"
        :orientation="'vertical'"
      >
        <div
          v-if="visibility?.['form-pay-later']"
          class="flex items-center space-x-2 relative"
        >
          <DeleteButton
            v-if="isEditing"
            component-id="form-pay-later"
            :is-editing="isEditing"
            @remove="emitRemove"
          />
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
        <div
          v-if="visibility?.['form-pay-now']"
          class="flex items-center space-x-2 relative"
        >
          <DeleteButton
            v-if="isEditing"
            component-id="form-pay-now"
            :is-editing="isEditing"
            @remove="emitRemove"
          />
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
import type { FormVisibility } from '@/types/visibility';
import {
  Card,
  Checkbox,
  DeleteButton,
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
  isEditing?: boolean;
  visibility?: FormVisibility;
}>();

const emit = defineEmits<{
  (e: 'update:formData', value: BookingFormData): void;
  (e: 'submit'): void;
  (e: 'remove-component', id: string): void;
}>();

const emitRemove = (componentId: string) => {
  emit('remove-component', componentId);
};

const localFormData = computed<BookingFormData>({
  get: () => props.formData,
  set: (value: BookingFormData) => emit('update:formData', value),
});

const handleSubmit = (e: Event) => {
  e.preventDefault();
  emit('submit');
};
</script>
