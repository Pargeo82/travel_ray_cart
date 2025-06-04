<template>
  <div class="space-y-6">
    <!-- Customer Details -->
    <Card>
      <div class="h5 mb-6">Enter your details</div>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div class="Body1">
            <span>First Name</span>
            <span class="text-red-500">*</span>
          </div>
          <input
            v-model="formData.firstName"
            type="text"
            class="w-full px-3 py-2 border rounded Body2"
          />
        </div>
        <div>
          <div class="Body1">
            <span>Last name</span>
            <span class="text-red-500">*</span>
          </div>
          <input
            v-model="formData.lastName"
            type="text"
            class="w-full px-3 py-2 border rounded Body2"
          />
        </div>
      </div>
      <div class="w-1/2 pr-2 mb-4">
        <div class="Body1">
          <span>Email</span>
          <span class="text-red-500">*</span>
        </div>
        <input
          v-model="formData.email"
          type="email"
          class="w-full px-3 py-2 border rounded Body2"
        />
      </div>
      <div class="w-1/2 pr-2 mb-4">
        <div class="Body1">
          <span>Country</span>
          <span class="text-red-500">*</span>
        </div>
        <select
          v-model="formData.country"
          class="w-full px-3 py-2 border rounded Body2"
        >
          <option value="Croatia">Croatia</option>
        </select>
      </div>
      <div class="w-1/2 pr-2 mb-4">
        <div class="Body1">Phone number</div>
        <div class="flex gap-2">
          <select
            v-model="formData.countryCode"
            class="px-3 py-2 border rounded Body2"
          >
            <option value="+385">HR +385</option>
          </select>
          <input
            v-model="formData.phone"
            type="tel"
            class="flex-1 px-3 py-2 border rounded Body2"
          />
        </div>
      </div>
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
        <label class="flex items-center gap-3 cursor-pointer">
          <input
            v-model="formData.needTaxi"
            type="checkbox"
            class="w-4 h-4 text-secondary border-text-primary-offset rounded-sm"
          />
          <span class="Body2"> I need a taxi / shuttle ride </span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input
            v-model="formData.needCar"
            type="checkbox"
            class="w-4 h-4 text-secondary border-text-primary-offset rounded-sm"
          />
          <span class="Body2"> I would like to rent a car </span>
        </label>
      </div>
      <div>
        <div class="Body2 Body1_bold mb-2">Special requests / dietary restrictions</div>
        <textarea
          v-model="formData.specialRequests"
          class="w-full px-3 py-2 border border-text-primary-offset rounded Body2 h-30 resize-none"
        />
      </div>
    </Card>

    <!-- Payment -->
    <Card>
      <div class="h5 text-text-primary mb-6">Payment</div>
      <div class="space-y-3">
        <label class="flex items-center gap-3 cursor-pointer">
          <input
            v-model="formData.paymentTiming"
            type="radio"
            value="march-15"
            class="w-4 h-4 text-secondary border-text-primary-offset"
          />
          <span class="Body2">Pay on 15 March</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input
            v-model="formData.paymentTiming"
            type="radio"
            value="now"
            class="w-4 h-4 text-secondary border-text-primary-offset"
          />
          <span class="Body2">Pay now</span>
        </label>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card } from '@/components/ui/card';

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
