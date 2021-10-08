import { IProduct } from '~/interfaces/product.interface'

import http from './http'

const baseURL = 'https://fakestoreapi.com'
const endpoint = 'products'
const api = http(baseURL)

const ProductsAPI = {
  getAll: () => api.get<IProduct[]>(endpoint),
  create: (sample: IProduct) => api.post<{ id: number }>(endpoint, sample),
  get: (id: number | string) => api.get<IProduct>(`${endpoint}/${id}`),
  patch: (id: number | string, sample: IProduct) =>
    api.patch<{ message: string }>(`${endpoint}/${id}`, sample),
  put: (id: number | string, sample: IProduct) =>
    api.put<{ message: string }>(`${endpoint}/${id}`, sample),
  delete: (id: number | string) =>
    api.delete<{ message: string }>(`${endpoint}/${id}`),
}

export default ProductsAPI
