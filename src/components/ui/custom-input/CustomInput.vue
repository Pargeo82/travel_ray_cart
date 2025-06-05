<template>
  <div class="w-full">
    <div
      v-if="label"
      class="flex items-center gap-1 mb-1"
    >
      <Label class="Body1">
        {{ label }}
      </Label>
      <span
        v-if="required"
        class="text-red-500"
        >*</span
      >
    </div>
    <Input
      v-bind="$attrs"
      :model-value="modelValue"
      :class="[
        'w-full px-3 py-2 border rounded-md transition-colors bg-white/40',
        'focus:ring-2 focus:ring-offset-2 focus:ring-primary/20',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'Body2',
        inputClass,
      ]"
      @update:model-value="$emit('update:modelValue', $event)"
    />
    <div
      v-if="hint"
      class="mt-1 text-sm text-text-secondary"
    >
      {{ hint }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  hint: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  inputClass: {
    type: String,
    default: '',
  },
});

defineEmits(['update:modelValue']);
</script>
