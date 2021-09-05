import { IProduct } from '~/interfaces/product.interface'

import http from './http'

const endpoint = 'products'

const ProductsAPI = {
  getAll: () => http().get<IProduct[]>(endpoint),
  create: (sample: IProduct) => http().post<{ id: number }>(endpoint, sample),
  get: (id: number | string) => http().get<IProduct>(`${endpoint}/${id}`),
  patch: (id: number | string, sample: IProduct) =>
    http().patch<{ message: string }>(`${endpoint}/${id}`, sample),
  put: (id: number | string, sample: IProduct) =>
    http().put<{ message: string }>(`${endpoint}/${id}`, sample),
  delete: (id: number | string) =>
    http().delete<{ message: string }>(`${endpoint}/${id}`),
}

export default ProductsAPI
