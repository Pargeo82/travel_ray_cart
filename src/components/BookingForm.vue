<template>
  <div class="space-y-6">
    <!-- Customer Details -->
    <Card>
      <div class="h5 mb-6">Enter your details</div>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <CustomInput
          v-model="formData.firstName"
          label="First Name"
          required
        />
        <CustomInput
          v-model="formData.lastName"
          label="Last name"
          required
        />
      </div>
      <div class="w-1/2 pr-2 mb-4">
        <CustomInput
          v-model="formData.email"
          label="Email"
          type="email"
          required
        />
      </div>
      <div class="w-1/2 pr-2 mb-4">
        <CustomSelect
          v-model="formData.country"
          label="Country"
          :options="[
            { value: 'croatia', label: 'Croatia' },
            { value: 'slovenia', label: 'Slovenia' },
            { value: 'other', label: 'Other' },
          ]"
          required
        />
      </div>
      <div class="w-1/2 pr-2 mb-4">
        <div class="Body1 mb-1">
          <span>Phone number</span>
          <span class="text-red-500">*</span>
        </div>
        <div class="flex gap-2">
          <div class="w-30">
            <CustomSelect
              v-model="formData.countryCode"
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
              v-model="formData.phone"
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
        <div class="h6 mb-4">Who are you booking for?</div>
        <RadioGroup
          default-value="comfortable"
          :orientation="'vertical'"
        >
          <div class="flex items-center space-x-2 Body1">
            <RadioGroupItem
              id="r1"
              value="default"
            />
            <Label for="r1">I am the main guest</Label>
          </div>
          <div class="flex items-center space-x-2 Body1">
            <RadioGroupItem
              id="r2"
              value="comfortable"
            />
            <Label for="r2">Booking for someone else</Label>
          </div>
        </RadioGroup>
      </div>
      <Separator
        class="bg-text-primary-offset/40 mt-8 mb-6"
        decorative
      />
      <div class="mb-6">
        <div class="h6 text-text-primary mb-4">Are you travelling for work?</div>
        <RadioGroup
          v-model="formData.workTravel"
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
              >Yes</Label
            >
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem
              id="work-no"
              value="no"
            />
            <Label
              for="work-no"
              class="Body2"
              >No</Label
            >
          </div>
        </RadioGroup>
      </div>
    </Card>

    <!-- Add to Booking -->
    <Card>
      <div class="h5 text-text-primary mb-6">Add to your booking</div>
      <div class="space-y-4 mb-6">
        <div class="flex items-center space-x-2">
          <Checkbox
            id="taxi"
            v-model:checked="formData.needTaxi"
          />
          <label
            for="taxi"
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 Body2"
          >
            I need a taxi / shuttle ride
          </label>
        </div>
        <div class="flex items-center space-x-2">
          <Checkbox
            id="car"
            v-model:checked="formData.needCar"
          />
          <label
            for="car"
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 Body2"
          >
            I would like to rent a car
          </label>
        </div>
      </div>
      <div>
        <CustomTextarea
          v-model="formData.specialRequests"
          label="Special requests / dietary restrictions"
          textarea-class="h-30"
        />
      </div>
    </Card>

    <!-- Payment -->
    <Card>
      <div class="h5 text-text-primary mb-6">Payment</div>
      <RadioGroup
        v-model="formData.paymentTiming"
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
            >Pay on 15 March</Label
          >
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem
            id="pay-now"
            value="now"
          />
          <Label
            for="pay-now"
            class="Body2"
            >Pay now</Label
          >
        </div>
      </RadioGroup>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import {
  Card,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Separator,
  CustomInput,
  CustomSelect,
  CustomTextarea,
} from '@/components/ui';

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
