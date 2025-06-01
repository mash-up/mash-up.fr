<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryCollection('pages').where('path', '=', route.path).first())
const { data: articles } = await useAsyncData(`${route.path}-articles`, () => queryCollection('articles').where('path', 'LIKE', route.path+'%').all())
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
              v-for="(article, index) in articles"
              :key="index"
              :title="article.title"
              :to="article.path"
              :image="`${article.path}.jpg`"
              :date="article.meta.date"
          />
        </UBlogPosts>
      </UPageBody>
    </UPage>
  </UContainer>
</template>