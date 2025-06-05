<script setup lang="ts">
import { ref } from 'vue';
import { CheckIcon } from '@radix-icons/vue';
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from '@/components/ui/stepper';

const steps = ['Customer Information', 'Payment Information', 'Finished'];
const currentStep = ref(1);
</script>

<template>
  <Stepper
    v-model:step="currentStep"
    class="w-full group"
    data-orientation="horizontal"
  >
    <StepperItem
      v-for="item in 3"
      :key="item"
      :step="item"
      class="flex-1"
    >
      <StepperTrigger class="flex flex-col items-center gap-1 w-full">
        <StepperIndicator
          class="w-8 h-8 flex items-center justify-center rounded-full border-2 border-secondary text-gray-700 [.group[data-state='active']_&]:bg-secondary [.group[data-state='active']_&]:text-white group-data-[completed]:bg-secondary group-data-[completed]:text-white"
        >
          <template v-if="item < 3">
            {{ item }}
          </template>
          <CheckIcon
            v-else
            class="w-4 h-4"
          />
        </StepperIndicator>
        <StepperTitle class="text-sm font-medium">
          {{ steps[item - 1] }}
        </StepperTitle>
      </StepperTrigger>
    </StepperItem>
  </Stepper>
</template>
