<script setup lang="ts">
const city = useState('city')
const route = useRoute()
const { data: speakers } = await useAsyncData(route.path+'-speakers', () => queryCollection('speakers').where('path', 'LIKE', `/${city.value}/speakers/%`).where('events', 'LIKE', `%"${route.params.event}"%`).all())
</script>

<template>
  <UPageGrid class="xl:grid-cols-3 my-5">
    <SpeakerCard
        v-for="(speaker, index) in speakers"
        :key="index"
        :value="speaker"
    />
  </UPageGrid>
</template>