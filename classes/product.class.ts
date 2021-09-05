import { IProduct } from '~/interfaces/product.interface'

export const INIT_PRODUCT: IProduct = {
  id: 0,
  title: '',
  price: 0,
  description: '',
  category: '',
  image: '',
  rating: {
    rate: 0,
    count: 0,
  },
}

export class Product implements IProduct {
  id
  title
  price
  description
  category
  image
  rating

  constructor(product: IProduct = INIT_PRODUCT) {
    this.id = product.id
    this.title = product.title
    this.price = product.price
    this.description = product.description
    this.category = product.category
    this.image = product.image
    this.rating = product.rating
  }
}
