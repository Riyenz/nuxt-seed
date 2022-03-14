<template>
  <div class="font-ubuntu h-screen w-screen">
    <div
      class="fixed top-0 left-0 bg-white w-full h-16 flex items-center px-10 z-40"
    >
      <NuxtLink to="/" class="flex items-center opacity-90">
        <img class="h-6 mr-1" src="/assets/images/logo.svg" alt="" />
        <h1 class="font-poppins font-bold text-xl">{{ title }}</h1>
      </NuxtLink>
    </div>
    <main class="h-full w-full bg-[#f8f9fe]">
      <Nuxt class="px-10 py-32" />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class AdminLayout extends Vue {
  title: string = 'Nuxt Seed'
}
</script>
