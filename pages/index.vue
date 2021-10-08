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
      relative
    "
  >
    <div class="flex justify-center items-center mb-4">
      <img
        class="h-10 mr-2"
        src="/assets/images/logo.svg"
        alt="Nuxt Seed Logo"
      />
      <h1 class="font-poppins font-bold text-4xl">{{ title }}</h1>
    </div>
    <p class="font-opensans font-light text-[20px] mb-4">
      {{ description }}
    </p>
    <div class="grid grid-flow-col gap-6">
      <p class="font-ubuntu font-bold text-sm">Sample Pages:</p>
      <NuxtLink
        to="products"
        class="font-opensans font-bold text-sm hover:opacity-80 hover:underline"
      >
        Products
      </NuxtLink>
      <NuxtLink
        to="cryptos"
        class="font-opensans font-bold text-sm hover:opacity-80 hover:underline"
      >
        Crypto
      </NuxtLink>
    </div>

    <div class="absolute bottom-4 right-4 flex items-center whitespace-nowrap">
      <p class="font-opensans font-light mr-2">Developed by</p>
      <a
        class="
          font-opensans font-light
          flex
          items-center
          opacity-80
          transform
          transition-transform
          duration-150
          ease-in-out
          hover:opacity-100 hover:scale-105
        "
        href="https://riyenz.com/"
      >
        <img class="h-8" src="https://riyenz.com/img/logo/06.svg" alt="" />
        Riyenz
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class IndexPage extends Vue {
  title: string = 'Nuxt Seed'
  description: string =
    'Built-in standards and structures; focus on what matters'
}
</script>
