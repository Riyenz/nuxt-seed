<template>
  <div class="container">
    <h1 class="text-3xl mb-10">{{ title }}</h1>

    <div class="flex flex-wrap">
      <NuxtLink
        v-for="product in products"
        :key="product.id"
        :to="`products/${product.id}`"
        class="
          flex flex-col
          rounded-xl
          p-4
          w-64
          mr-6
          mb-6
          bg-white
          cursor-pointer
          shadow
          transition
          duration-150
          ease-in-out
          hover:shadow-xl hover:-translate-y-0.5
        "
      >
        <div
          class="
            rounded-xl
            w-64
            h-64
            flex
            items-center
            justify-center
            max-w-full
            overflow-hidden
            mb-6
          "
        >
          <img
            :src="product.image"
            :alt="product.title"
            class="w-full rounded-t-xl object-contain"
          />
        </div>
        <h3 class="text-sm h-10 overflow-hidden mb-2">{{ product.title }}</h3>
        <p class="text-base text-yellow-500 mb-2">$ {{ product.price }}</p>
        <div class="grid grid-flow-col auto-cols-max items-center">
          <svg
            v-for="rating in Math.round(product.rating.rate)"
            :key="rating"
            class="fill-current text-yellow-300 h-3 w-3"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
            />
          </svg>

          <p class="text-xs text-gray-400">({{ product.rating.count }})</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { Action, Component, Getter, Vue } from 'nuxt-property-decorator'
import { IProduct } from '~/interfaces/product.interface'

@Component({})
export default class Products extends Vue {
  title: string = 'Products'

  @Action('products/getAllProducts') getAllProducts!: () => {}
  @Getter('products/products') products!: IProduct[]

  head() {
    return {
      title: this.title,
    }
  }

  mounted() {
    this.getAllProducts()
  }
}
</script>
