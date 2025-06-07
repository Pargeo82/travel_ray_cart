<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { availableLocales } from '@/i18n';
import type { AcceptableValue } from 'reka-ui';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/components/ui/select';

const { locale } = useI18n();

const changeLanguage = (newLocale: AcceptableValue) => {
  if (newLocale && typeof newLocale === 'string') {
    locale.value = newLocale;
    localStorage.setItem('user-locale', newLocale);
  }
};

// Set initial locale from localStorage or browser language
const savedLocale = localStorage.getItem('user-locale');
if (savedLocale) {
  locale.value = savedLocale;
} else {
  const browserLang = navigator.language.split('-')[0];
  if (availableLocales.some((lang) => lang.code === browserLang)) {
    locale.value = browserLang;
  }
}

const getFlagImage = (code: string) => {
  switch (code) {
    case 'en':
      return '/gb.webp';
    case 'hr':
      return '/hr.webp';
    case 'de':
      return '/de.webp';
    case 'pt':
      return '/pt.webp';
    default:
      return '';
  }
};
</script>

<template>
  <Select
    :model-value="locale"
    @update:model-value="changeLanguage"
    class="bg-background"
  >
    <SelectTrigger class="w-[180px] h-10">
      <div class="flex items-center gap-2">
        <img
          :src="getFlagImage(locale)"
          :alt="availableLocales.find((l) => l.code === locale)?.name || 'Language'"
          class="w-5 h-4 object-cover rounded-sm"
        />
        <span>{{ availableLocales.find((l) => l.code === locale)?.name || 'Select language' }}</span>
      </div>
    </SelectTrigger>
    <SelectContent class="bg-background">
      <SelectGroup>
        <SelectItem
          v-for="lang in availableLocales"
          :key="lang.code"
          :value="lang.code"
          class="cursor-pointer hover:bg-secondary"
        >
          <div class="flex items-center gap-2">
            <img
              :src="getFlagImage(lang.code)"
              :alt="lang.name"
              class="w-5 h-4 object-cover rounded-sm"
            />
            <span>{{ lang.name }}</span>
          </div>
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
