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
    <Select
      v-model="localValue"
      :disabled="disabled"
    >
      <SelectTrigger :class="['w-full bg-white/40', selectClass]">
        <SelectValue :placeholder="placeholder || 'Select an option'" />
      </SelectTrigger>
      <SelectContent class="bg-white">
        <SelectGroup>
          <SelectItem
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :disabled="option.disabled"
            class="hover:bg-secondary"
          >
            {{ option.label }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <div
      v-if="hint"
      class="mt-1 text-sm text-text-secondary"
    >
      {{ hint }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  options: {
    type: Array as () => Array<{ value: string | number; label: string; disabled?: boolean }>,
    default: () => [],
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
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
  disabled: {
    type: Boolean,
    default: false,
  },
  selectClass: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const localValue = computed({
  get: () => props.modelValue,
  set: (value: string | number) => emit('update:modelValue', value),
});
</script>
