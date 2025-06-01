<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryCollection('pages').where('path', '=', route.path).first())
const { data: speakers } = await useAsyncData(`${route.path}-speakers`, () => queryCollection('speakers').where('path', 'LIKE', route.path+'%').all())
</script>

<template>
  <UContainer>
    <UPage>
      <UPageHeader
          :title="page?.title"
          :description="page?.description"
      >
      </UPageHeader>
      <UPageBody>
        <UPageGrid class="xl:grid-cols-3 my-5">
          <SpeakerCard
              v-for="(speaker, index) in speakers"
              :key="index"
              :value="speaker"
          />
        </UPageGrid>
      </UPageBody>
    </UPage>
  </UContainer>
</template>