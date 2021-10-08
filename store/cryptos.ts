import CryptoAPI from '../apis/cryptos.api'
import { ICrypto } from '~/interfaces/crypto.interface'

const MODULE_STATE = {
  cryptos: [] as ICrypto[],
}

export const state = () => MODULE_STATE

export const getters = {
  cryptos: (state: typeof MODULE_STATE) => state.cryptos,
}

export const mutations = {
  setCryptos: (state: typeof MODULE_STATE, cryptos: ICrypto[]) => {
    state.cryptos = cryptos
  },
}

export const actions = {
  getAllCryptos: async (context: any): Promise<ICrypto[]> => {
    const cryptos = await CryptoAPI.getAll()
    context.commit('setCryptos', cryptos)

    return cryptos
  },
}
