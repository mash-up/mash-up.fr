<script setup lang="ts">
const route = useRoute()
const city = useState('city')
const { data: event } = await useAsyncData(route.path, () => queryCollection('events').where('path', '=', route.path).first())
</script>

<template>
  <UContainer v-if="event">
    <UPage>
      <UPageHeader
          :title="event.title"
          :description="event.description"
      >
        <template #headline>
          <UBreadcrumb :items="[{ label: 'Événements', icon: 'i-ph-arrow-left-bold', to: `/${city}/evenements`}]" class="max-w-full" />
        </template>
      </UPageHeader>
      <UPageBody>
        <ContentRenderer :value="event" />
      </UPageBody>
    </UPage>
  </UContainer>
</template>