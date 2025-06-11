<template>
  <header class="bg-secondary px-6 py-4">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="text-xl font-bold">
        {{ $t('app.title') }}
      </div>

      <div class="flex items-center gap-4">
        <!-- Restore Elements Dropdown -->
        <div
          v-if="isEditing && showEditButton && hiddenElementsExist"
          class="w-56"
        >
          <CustomSelect
            v-model="selectedElementToRestore"
            :options="hiddenElementOptions"
            :placeholder="$t('navbar.restoreElements')"
            @update:model-value="restoreElement"
          />
        </div>

        <!-- Edit Button -->
        <Button
          v-if="showEditButton"
          @click="toggleEditMode"
          size="sm"
          variant="secondary"
        >
          <Pencil1Icon
            v-if="!isEditing"
            class="w-4 h-4"
          />
          <Cross1Icon
            v-else
            class="w-4 h-4"
          />
        </Button>

        <!-- Language Switcher -->
        <LangSwitcher />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Button, CustomSelect } from '@/components/ui';
import { Pencil1Icon, Cross1Icon } from '@radix-icons/vue';
import type { VisibilityState } from '@/types/visibility.ts';
import LangSwitcher from '@/components/LangSwitcher.vue';

defineOptions({
  name: 'AppNavbar',
});

const props = defineProps<{
  isEditing?: boolean;
  showEditButton?: boolean;
  visibilityState?: VisibilityState;
}>();

const emit = defineEmits<{
  'update:isEditing': [value: boolean];
  'restore-element': [sectionType: string, elementId: string];
}>();

const { t } = useI18n();

const selectedElementToRestore = ref('');

// Check if any elements are hidden
const hiddenElementsExist = computed(() => {
  if (!props.visibilityState) return false;
  
  // Check sidebar elements
  const hasSidebarHidden = Object.values(props.visibilityState.sidebar).some(isVisible => !isVisible);
  
  // Check form elements
  const hasFormHidden = Object.values(props.visibilityState.form).some(isVisible => !isVisible);
  
  return hasSidebarHidden || hasFormHidden;
});

// Computed property to generate options for the dropdown based on hidden elements
const hiddenElementOptions = computed(() => {
  if (!props.visibilityState) return [];

  const options = [];

  // Add sidebar elements
  const sidebarElements = Object.entries(props.visibilityState.sidebar)
    .filter(([, isVisible]) => !isVisible)
    .map(([id]) => ({
      value: `sidebar.${id}`,
      label: getElementLabel('sidebar', id),
    }));

  // Header option for sidebar elements
  if (sidebarElements.length > 0) {
    options.push({
      value: 'sidebar-header',
      label: t('navbar.sidebarElements'),
      disabled: true,
    });
    options.push(...sidebarElements);
  }

  // Add form elements
  const formElements = Object.entries(props.visibilityState.form)
    .filter(([, isVisible]) => !isVisible)
    .map(([id]) => ({
      value: `form.${id}`,
      label: getElementLabel('form', id),
    }));

  // Header option for form elements
  if (formElements.length > 0) {
    options.push({
      value: 'form-header',
      label: t('navbar.formElements'),
      disabled: true,
    });
    options.push(...formElements);
  }

  return options.length > 0 ? options : [{ value: 'none', label: t('navbar.noHiddenElements'), disabled: true }];
});

// Function to get translated element labels
const getElementLabel = (section: string, id: string) => {
  return t(`navbar.elements.${id}`);
};

// Function to restore a hidden element
const restoreElement = (value: string) => {
  if (value === 'none' || value.endsWith('-header')) return;

  const [section, elementId] = value.split('.');
  emit('restore-element', section, elementId);

  // Reset selection
  selectedElementToRestore.value = '';
};

const toggleEditMode = () => {
  emit('update:isEditing', !props.isEditing);
};
</script>
