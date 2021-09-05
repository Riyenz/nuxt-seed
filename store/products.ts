import ProductsAPI from '~/apis/products.api'
import { Product } from '~/classes/product.class'
import { IProduct } from '~/interfaces/product.interface'

const MODULE_STATE = {
  products: [] as IProduct[],
  product: new Product() as IProduct,
}

export const state = () => MODULE_STATE

export const getters = {
  products: (state: typeof MODULE_STATE) => state.products,
  product: (state: typeof MODULE_STATE) => state.product,
}

export const mutations = {
  setProduct: (state: typeof MODULE_STATE, product: IProduct) => {
    state.product = new Product(product)
  },
  setProducts: (state: typeof MODULE_STATE, products: IProduct[]) => {
    state.products = products
  },
}

export const actions = {
  getAllProducts: async (context: any): Promise<IProduct[]> => {
    const products = await ProductsAPI.getAll()
    context.commit('setProducts', products)

    return products
  },
  getProduct: async (context: any, id: number | string) => {
    const product = await ProductsAPI.get(id)
    context.commit('setProduct', product)

    return product
  },
  createProduct: async (context: any, product: IProduct) => {
    const response = await ProductsAPI.create(product)
    context.commit('setProduct', product)

    return response
  },
  editProduct: async (context: any, product: IProduct) => {
    const response = await ProductsAPI.put(product.id, product)
    context.commit('setProduct', product)

    return response
  },
  deleteProduct: async (context: any, sampleId: number | string) => {
    const response = await ProductsAPI.delete(sampleId)
    const products = context.state.products.filter(
      (product: IProduct) => product.id !== sampleId
    )
    context.commit('setProducts', products)

    return response
  },
}
