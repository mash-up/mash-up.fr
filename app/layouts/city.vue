<script setup lang="ts">
import DefaultLayout from '../layouts/default.vue'
import type { ContentNavigationItem } from '@nuxt/content'
import { mapContentNavigation } from "@nuxt/ui/utils/content";

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))
const route = useRoute()
const cityNavigation = computed(() => {
  const item = navigation.value.find((i) => route.path.startsWith(i.path))
  if (!item) return null

  const filteredChildren = mapContentNavigation(item.children?.filter((i) => {
    return i.stem?.split('/').length === 3
  }).map((i) => ({
    ...i,
    children: [],
  })))

  return mapContentNavigation([{
    ...item,
    children: filteredChildren
  }])[0]
})

const cities = useState('cities')

const { data: page } = await useAsyncData(`${cityNavigation.value?.stem}-homepage`, () => queryCollection('pages').where('path', '=', cityNavigation.value?.to).first(), {
  watch: [cityNavigation],
})

const social = computed(() => Object.entries(page.value?.meta?.social ?? []).map(([key, i]) => ({
  icon: `i-simple-icons-${key}`,
  to: i,
  name: key.charAt(0).toUpperCase() + key.slice(1),
})))

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Mash Up ${cityNavigation.value?.label}` : `Mash Up ${cityNavigation.value?.label}`
  },
})
</script>

<template>
  <DefaultLayout>
    <template #header>
      <UHeader :to="cityNavigation?.to">
        <template #title>
          <div class="relative">
            <img src="/mash-up-city-logo.svg" class="w-auto h-10" alt="Logo du Mash Up" />
            <span class="top-4 left-11 absolute flex gap-1">
              {{cityNavigation?.label}}
              <UDropdownMenu
                  :items="cities"
                  :ui="{
      content: 'w-48'
    }"
              >
    <UButton icon="i-lucide-chevron-down" color="neutral" variant="ghost" size="xs" />
  </UDropdownMenu>
            </span>
          </div>
        </template>
        <UNavigationMenu :items="cityNavigation?.children" />
        <template #right>
          <UTooltip :text="network.name" v-for="network in social">
            <UButton
                v-bind="network"
                target="_blank"
                variant="ghost"
                color="neutral"
                :ui="{
                 label: 'hidden sm:inline-flex'
              }"
            >
              <span class="sr-only">{{network.name}}</span>
            </UButton>
          </UTooltip>
        </template>
        <template #body>
          <UNavigationMenu :items="cityNavigation?.children" orientation="vertical" />
        </template>
      </UHeader>
    </template>
    <template #footer>
      <UFooter>
        <template #top>
          <UContainer>
            <UFooterColumns :columns="[{
          label: 'Mash Up '+cityNavigation?.label,
          children: cityNavigation?.children
        }, {
          label: 'Villes',
          children: cities
        }]">
              <template #left>
                <div class="relative">
                  <img src="/mash-up-city-logo.svg" class="w-auto h-20" alt="Logo du Mash Up" />
                  <span class="top-10 left-21 absolute flex gap-1 text-5xl font-bold text-highlighted">
              {{cityNavigation?.label}}
            </span>
                </div>
              </template>
            </UFooterColumns>
          </UContainer>
        </template>

        <template #left>
          © Mash Up {{cityNavigation?.label}} {{ new Date().getFullYear() }}
        </template>

        <template #right>
          <UButton
              v-for="network in social"
              v-bind="network"
              target="_blank"
              variant="ghost"
              color="neutral"
              :ui="{
                 label: 'hidden sm:inline-flex'
              }"
          >
            <span class="sr-only">{{network.name}}</span>
          </UButton>
        </template>
      </UFooter>
    </template>
  </DefaultLayout>
</template>