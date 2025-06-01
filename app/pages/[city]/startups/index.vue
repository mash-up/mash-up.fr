<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryCollection('pages').where('path', '=', route.path).first())
const { data: startups } = await useAsyncData(`${route.path}-startups`, () => queryCollection('startups').where('path', 'LIKE', route.path+'%').all())
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
          <StartupCard
              v-for="(startup, index) in startups"
              :key="index"
              :value="startup"
          />
        </UPageGrid>
      </UPageBody>
    </UPage>
  </UContainer>
</template>