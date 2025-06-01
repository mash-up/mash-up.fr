<script setup lang="ts">
import type {ContentNavigationItem} from "@nuxt/content";

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))
</script>

<template>
  <UContainer>
    <UBlogPosts class="my-12 md:grid-cols-2 lg:grid-cols-2">
      <UBlogPost v-for="city in navigation" :to="city.path" :title="`Mash Up ${city.title}`" :image="`${city.path}.jpg`"/>
    </UBlogPosts>
  </UContainer>
</template>