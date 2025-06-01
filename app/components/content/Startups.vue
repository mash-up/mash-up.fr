<script setup lang="ts">
const city = useState('city')
const route = useRoute()
const { data: startups } = await useAsyncData(
    route.path+'-startups',
    () => queryCollection('startups')
      .where('path', 'LIKE', `/${city.value}/startups/%`)
      .where('events', 'LIKE', `%"${route.params.event}"%`)
      .all(),
    {
      transform: startups => startups.map(s => ({
        ...s,
        event: s.events.find(e => e.id === route.params.event)
      })).sort((a, b) => a.event.award?.localeCompare(b.event.award))
    }
)
</script>

<template>
  <UPageGrid class="xl:grid-cols-3 my-5">
    <StartupCard
        v-for="(startup, index) in startups"
        :key="index"
        :value="startup"
    />
  </UPageGrid>
</template>