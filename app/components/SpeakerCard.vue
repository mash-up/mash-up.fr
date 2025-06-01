<script setup lang="ts">
const props = defineProps(['value'])
</script>

<template>
  <UPageCard
      :title="value.title"
      :description="value.description"
      :ui="{
                container: 'gap-y-3',
                leading: 'flex justify-center',
                wrapper: 'items-center',
                title: 'text-center',
                description: 'text-center'
              }"
      variant="subtle"
      :to="value.path"
  >
    <template #leading>
      <UAvatar :src="`${value.path}.jpg`" :alt="value.title" class="mx-auto size-24" />
    </template>
  </UPageCard>
</template>