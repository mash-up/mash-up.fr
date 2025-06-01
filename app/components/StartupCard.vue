<script setup lang="ts">
const props = defineProps(['value'])
</script>

<template>
  <UBlogPost
      :title="value.title"
      :to="value.path"
      :image="value.img ? `${value.path}.jpg` : `https://i.ytimg.com/vi/${value.youtubeVideo}/hqdefault.jpg`"
      :badge="value.event?.award ? value.event.award : null"
      :ui="{image: 'object-center'}"
  />
</template>