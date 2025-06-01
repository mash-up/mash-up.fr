<script setup lang="ts">
const route = useRoute()
const { data: startup } = await useAsyncData(route.path, () => queryCollection('startups').where('path', '=', route.path).first())
</script>

<template>
  <UContainer>
    <UPage>
      <UPageBody>
        <ContentRenderer :value="startup" />
        <YoutubeVideo :id="startup.youtubeVideo" />
      </UPageBody>
    </UPage>
  </UContainer>
</template>