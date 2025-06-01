<script setup lang="ts">
const route = useRoute()
const city = useState('city')
const { data: speaker } = await useAsyncData(route.path, () => queryCollection('speakers').where('path', '=', route.path).first())
</script>

<template>
  <UContainer v-if="speaker">
    <UPage>
      <UPageHeader
          :title="speaker.title"
          :description="speaker.description"
      >
        <template #headline>
          <UBreadcrumb :items="[{ label: 'Speakers', icon: 'i-ph-arrow-left-bold', to: `/${city}/speakers`}]" class="max-w-full" />
        </template>
      </UPageHeader>
      <UPageBody>
        <ContentRenderer :value="speaker" />
      </UPageBody>
    </UPage>
  </UContainer>
</template>