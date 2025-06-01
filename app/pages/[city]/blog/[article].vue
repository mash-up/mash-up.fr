<script setup lang="ts">
const route = useRoute()
const city = useState('city')
const { data: article } = await useAsyncData(route.path, () => queryCollection('articles').where('path', '=', route.path).first())
</script>

<template>
  <UContainer v-if="article">
    <UPage>
      <UPageHeader
          :title="article.title"
          :description="article.description"
      >
        <template #headline>
          <UBreadcrumb :items="[{ label: 'Blog', icon: 'i-ph-arrow-left-bold', to: `/${city}/blog`}]" class="max-w-full" />
        </template>
      </UPageHeader>
      <UPageBody>
        <ContentRenderer :value="article" />
      </UPageBody>
    </UPage>
  </UContainer>
</template>