<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryCollection('pages').where('path', '=', route.path).first())
const { data: events } = await useAsyncData(`${route.path}-events`, () => queryCollection('events').where('path', 'LIKE', route.path+'%').order('date', 'DESC').all())
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
        <UBlogPosts>
          <UBlogPost
              v-for="(event, index) in events"
              :key="index"
              :title="event.title"
              :to="event.path"
              :image="`${event.path}.jpg`"
              :date="event.date"
          />
        </UBlogPosts>
      </UPageBody>
    </UPage>
  </UContainer>
</template>