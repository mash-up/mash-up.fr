<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('pages'))
import { fr } from '@nuxt/ui/locale'

provide('navigation', navigation)

useHead({
  title: 'Mash Up',
  meta: [
    { name: 'description', content: 'L\'association par & pour les étudiants entreprenants' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
  ],
  htmlAttrs: {
    lang: 'fr',
  },
})
</script>

<template>
  <UApp :locale="fr">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </UApp>
</template>
