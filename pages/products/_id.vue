<template>
  <div class="container">
    <div class="flex justify-between items-center mb-10">
      <h2 class="text-xl">{{ title }}</h2>
      <NuxtLink to="/products" class="text-lg px-4 py-2 rounded-xl bg-gray-100"
        >Go Back</NuxtLink
      >
    </div>

    <div class="rounded-xl p-8 bg-white cursor-pointer shadow flex">
      <div
        class="
          rounded-xl
          w-96
          h-96
          flex
          items-center
          justify-center
          max-w-full
          overflow-hidden
          mr-8
          flex-shrink-0
        "
      >
        <img
          :src="product.image"
          :alt="product.title"
          class="w-full rounded-t-xl object-contain"
        />
      </div>
      <div class="flex flex-col">
        <h1 class="text-3xl mb-6">
          {{ product.title }}
        </h1>
        <p class="text-xl mb-6">
          {{ product.description }}
        </p>
        <div class="grid grid-flow-col auto-cols-max items-center mb-6">
          <svg
            v-for="rating in Math.round(product.rating.rate)"
            :key="rating"
            class="fill-current text-yellow-300 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
            />
          </svg>

          <p class="text-gray-400 ml-4 mt-1">
            {{ product.rating.count }} Ratings
          </p>
        </div>
        <p class="text-3xl text-yellow-500 mb-6">$ {{ product.price }}</p>
        <div>
          <button
            class="
              rounded
              px-6
              py-2
              bg-yellow-500
              text-white text-xl
              w-64
              mr-2
              opacity-90
              transition
              duration-150
              ease-in-out
              hover:opacity-100
            "
          >
            Buy Now
          </button>
          <button
            class="
              rounded
              px-6
              py-2
              bg-yellow-400
              text-white text-xl
              w-64
              opacity-90
              transition
              duration-150
              ease-in-out
              hover:opacity-100
            "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Action, Component, Getter, Vue } from 'nuxt-property-decorator'
import { IProduct } from '~/interfaces/product.interface'

@Component({})
export default class Product extends Vue {
  title: string = 'View Product'

  @Action('products/getProduct') getProduct!: (id: string | number) => {}
  @Getter('products/product') product!: IProduct

  head() {
    return { title: this.product.title || this.title }
  }

  mounted() {
    this.getProduct(this.$route.params.id)
  }
}
</script>
