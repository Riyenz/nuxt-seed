<template>
  <div>
    <h1 class="font-bold text-3xl mb-10">Top 100 Crypto</h1>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <div
        v-for="crypto in cryptos"
        :key="crypto.id"
        class="flex flex-col bg-[#fcfcfe] rounded-3xl shadow py-4 px-6"
      >
        <div class="flex justify-between items-center flex-wrap mb-6">
          <div class="flex items-center whitespace-nowrap mb-2">
            <img class="w-8 mr-2" :src="crypto.image" :alt="crypto.id" />
            <p class="font-bold text-[#a5a5a5]">
              {{ crypto.symbol.toUpperCase() }} / USD
            </p>
          </div>

          <div
            class="flex items-center whitespace-nowrap mb-2"
            :class="{
              'text-[#a5a5a5]': crypto.price_change_percentage_24h === 0,
              'text-[#fa2c5a]': crypto.price_change_percentage_24h < 0,
              'text-[#73cb5b]': crypto.price_change_percentage_24h > 0,
            }"
          >
            <div
              v-if="crypto.price_change_percentage_24h !== 0"
              class="p-2 rounded-md mr-1"
              :class="{
                'bg-[#fa2c5a] bg-opacity-20':
                  crypto.price_change_percentage_24h < 0,
                'bg-[#73cb5b] bg-opacity-20':
                  crypto.price_change_percentage_24h > 0,
              }"
            >
              <ArrowDownIcon
                class="h-2"
                :class="{
                  'transform rotate-180':
                    crypto.price_change_percentage_24h > 0,
                }"
              />
            </div>
            <p class="font-bold text-sm">
              {{ crypto.price_change_percentage_24h | readableNumber }}%
            </p>
          </div>
        </div>

        <p class="font-bold text-2xl text-[#434343] mb-1">
          {{ crypto.current_price | readableNumber }}
          <small class="font-bold text-sm text-[#a5a5a5]">USD</small>
        </p>
        <p class="font-bold text-[#a5a5a5]">
          {{ crypto.market_cap | readableNumber }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Action, Component, Getter, Vue } from 'nuxt-property-decorator'
import { ICrypto } from '~/interfaces/crypto.interface'
import { numberMixin } from '~/mixins/number.mixin'

import ArrowDownIcon from '~/assets/svg/arrow-down-icon.svg?inline'

@Component({
  layout: 'admin',
  mixins: [numberMixin],
  components: {
    ArrowDownIcon,
  },
})
export default class CryptoIndexPage extends Vue {
  @Action('cryptos/getAllCryptos') getAllCryptos!: () => {}
  @Getter('cryptos/cryptos') cryptos!: ICrypto[]

  mounted() {
    this.getAllCryptos()
  }
}
</script>
