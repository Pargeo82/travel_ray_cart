<template>
  <div class="flex items-center justify-center mb-8">
    <div class="flex items-center gap-32">
      <div
        v-for="step in steps"
        :key="step.number"
        class="flex flex-col items-center"
      >
        <div
          :class="[
            'w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold',
            step.isActive
              ? 'bg-gray-900 text-white'
              : step.isCompleted
                ? 'bg-gray-300 text-gray-600 border-2 border-gray-600'
                : 'bg-gray-300 text-gray-600',
          ]"
        >
          <i
            v-if="step.isCompleted"
            class="ti ti-check text-xl"
          />
          <span v-else>{{ step.number }}</span>
        </div>
        <div :class="['text-sm font-medium mt-2', step.isActive ? 'text-gray-900' : 'text-gray-600']">
          {{ step.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Step {
  number: number;
  title: string;
  isActive: boolean;
  isCompleted: boolean;
}

interface Props {
  steps: Step[];
}

defineProps<Props>();
</script>
