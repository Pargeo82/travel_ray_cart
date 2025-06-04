<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

interface Props {
  class?: HTMLAttributes['class'];
  as?: string;
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
});
</script>

<template>
  <component
    :is="props.as"
    :class="[
      'bg-background rounded-lg p-6 my-4 shadow-sm border border-text-primary-offset/20',
      $attrs.class,
      props.class,
    ]"
  >
    <slot />
  </component>
</template>
