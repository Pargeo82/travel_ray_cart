<template>
  <Button
    v-if="isEditing"
    @click="handleRemove"
    variant="destructive"
    size="icon"
    class="absolute top-2 right-2 z-10 w-6 h-6 bg-red-500 hover:cursor-pointer"
  >
    <TrashIcon class="h-3 w-3" />
  </Button>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui';
import { TrashIcon } from '@radix-icons/vue';

defineOptions({
  name: 'DeleteButton',
});

const props = defineProps<{
  componentId: string;
  isEditing?: boolean;
}>();

const emit = defineEmits<{
  (e: 'remove', id: string): void;
}>();

const handleRemove = () => {
  emit('remove', props.componentId);
};
</script>
