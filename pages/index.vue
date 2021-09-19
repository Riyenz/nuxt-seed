<template>
  <div
    class="
      flex flex-col
      items-center
      justify-center
      h-full
      w-full
      bg-pattern bg-cover bg-
      p-8
    "
  >
    <div class="flex justify-center items-center mb-4">
      <img
        class="h-8 mr-2"
        src="/assets/images/logo.svg"
        alt="Nuxt Seed Logo"
      />
      <h1 class="font-poppins font-bold text-3xl">{{ title }}</h1>
    </div>
    <p class="font-opensans font-light">
      Built-in standards and structures; focus on what matters
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class IndexPage extends Vue {
  title: string = 'Nuxt Seed'
}
</script>
