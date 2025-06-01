<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('pages'))
import { fr } from '@nuxt/ui/locale'

provide('navigation', navigation)
</script>

<template>
  <UApp :locale="fr">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </UApp>
</template>
