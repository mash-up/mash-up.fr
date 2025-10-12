<template>
  <UContainer>
    <UPageHero
        orientation="horizontal"
        description="* Qui est actif, qui fait preuve de dynamisme, d'audace">
      <template #title>L'association par & pour <span>les étudiants entreprenants*</span></template>
      <template #default>
        <img :src="`/${useState('city').value}/home.jpg`" class="w-full rounded-lg"/>
      </template>
    </UPageHero>
    <UPageSection
        title="Nos missions"
        :features="[
        {
          title: 'Questionner et Promouvoir',
          description: 'l’entrepreneuriat auprès des étudiants au travers d’événements',
          icon: 'i-lucide-rocket'
        },
        {
          title: 'Réunir des étudiants',
          description: 'aux profils variés et complémentaires (ingénieurs, managers, développeurs, designers, …)',
          icon: 'i-lucide-book-open'
        },
        {
          title: 'Offrir de la visibilité',
          description: 'aux jeunes pépites locales',
          icon: 'i-lucide-users'
        },
      ]"
    />
    <UPageSection
        title="Nos événements"
        description="testés et approuvés par les étudiants"
    />
    <UPageSection
        orientation="horizontal"
        title="Mash Up"
        description="Ouvert à tous : étudiants / professionnels / curieux"
        :features="[
        {
          title: 'Talks et débat',
          description: 'Avec des intervenants de qualité sur des sujets de société toujours en lien avec l\'entrepreneuriat',
          icon: 'i-lucide-zap'
        },
        {
          title: 'Concours de pitch',
          description: 'Pour permettre aux étudiants / jeunes diplomés de présenter leur projet devant 300 personnes',
          icon: 'i-lucide-trophy'
        },
        {
          title: 'Cocktail de networking',
          description: 'Autour d’un verre, rencontrez des profils différents, mélangez-vous et créez les projets de demain.',
          icon: 'i-lucide-users-round'
        },
      ]"
        :links="[
  {
    label: 'Les prochains Mash Up',
    to: '/evenements',
    trailingIcon: 'i-lucide-arrow-right',

  }]"
    >      <img :src="`/${useState('city').value}/mash-up.jpg`" class="w-full rounded-lg"/>
    </UPageSection>
    <UPageSection
        orientation="horizontal"
        reverse
        title="Worksh'Up"
        description="Ouvert uniquement aux étudiants"
        :features="[
        {
          title: 'L\'atelier',
          description: 'Un atelier pratique sur une thématique entrepreneuriale dans un lieu / entreprise de l\'écosystème local',
          icon: 'i-lucide-tool-case'
        },
        {
          title: 'Pizzas / Bières',
          description: 'Moment de rencontre pour permettre aux étudiants d\'échanger et de se mélanger',
          icon: 'i-lucide-pizza'
        },
      ]"
        :links="[
  {
    label: 'Les prochains Worksh\'Up',
    to: '/evenements',
    trailingIcon: 'i-lucide-arrow-right',
  }]"
    >
      <img :src="`/${useState('city').value}/worksh-up.jpg`" class="w-full rounded-lg"/>
    </UPageSection>
    <UPageCTA
        variant="solid"
        title="Revivre les anciens événements"
        :links="[{
        label: 'Voir les vidéos',
        to: 'https://www.youtube.com/@MashUp_France',
        target: '_blank',
        icon: 'i-lucide-youtube',
      }]"
        class="bg-cover"
        :style="{
    backgroundImage: `url('/${useState('city').value}/replay.jpg')`
  }"
    />
  </UContainer>

</template>
<script setup lang="ts">
useSeoMeta({
  title: null, //TODO
})
</script>