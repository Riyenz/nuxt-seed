import { ICrypto } from '~/interfaces/crypto.interface'

import http from './http'

const baseURL = 'https://api.coingecko.com/api/v3'
const endpoint = '/coins/markets'
const api = http(baseURL)

const CryptosAPI = {
  getAll: () =>
    api.get<ICrypto[]>(endpoint, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 100,
        sparkline: false,
      },
    }),
}

export default CryptosAPI
