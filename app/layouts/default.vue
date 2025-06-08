<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import {mapContentNavigation} from "@nuxt/ui-pro/utils/content";

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))

const cities = useState('cities', () => mapContentNavigation(navigation.value.map((i) => ({
  ...i,
  children: [],
}))))
</script>

<template>
  <slot name="header">
    <UHeader>
      <template #title>
        <img src="/mash-up-logo.svg" class="w-auto h-10" alt="Logo du Mash Up" />
      </template>
    </UHeader>
  </slot>
  <UMain>
    <slot name="page">
      <NuxtPage />
    </slot>
  </UMain>
  <slot name="footer">
    <UFooter>
      <template #left>
        © Mash Up {{ new Date().getFullYear() }}
      </template>

      <template #right>
        <UButton icon="i-simple-icons-x" color="neutral" variant="ghost" to="https://x.com/MashUp_France" target="_blank" />
        <UButton icon="i-simple-icons-facebook" color="neutral" variant="ghost" to="https://www.facebook.com/LeMashUp" target="_blank" />
        <UButton icon="i-simple-icons-youtube" color="neutral" variant="ghost" to="https://www.youtube.com/@MashUp_France" target="_blank" />
      </template>
    </UFooter>
  </slot>
</template>