<script setup lang="ts">
  definePageMeta({
    layout: 'city'
  })

  const route = useRoute()
  const city = useState('city')

  watch(route, (r) => {
    city.value = r.path.slice(1).split('/').shift()
  }, {immediate: true})
</script>

<template>
  <NuxtPage></NuxtPage>
</template>