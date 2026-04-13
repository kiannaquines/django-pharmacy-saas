import product01 from '@/assets/images/product/img-01.png'
import product06 from '@/assets/images/product/img-06.png'
import product07 from '@/assets/images/product/img-07.png'
import product09 from '@/assets/images/product/img-09.png'
import product08 from '@/assets/images/product/img-08.png'
import product03 from '@/assets/images/product/img-03.png'
import product02 from '@/assets/images/product/img-02.png'

export type ProductType = {
  code: string
  name: string
  image: string
  category: string
  price: string
  stock: number
  revenue: string
  status: 'Publish' | 'Scheduled'
  variant: 'bg-danger/15 text-danger' | 'bg-success/15 text-success'
}

export const products: ProductType[] = [
  {
    code: '#TAD-232100071',
    name: 'Smartest Printed T-shirt',
    image: product01,
    category: 'Fashion',
    price: '$79.99',
    stock: 500,
    revenue: '$24,365',
    status: 'Scheduled',
    variant: 'bg-danger/15 text-danger'
  },
  {
    code: '#TAD-232100074',
    name: 'Techel Black Bluetooth Soundbar',
    image: product06,
    category: 'Electronics',
    price: '$452.99',
    stock: 300,
    revenue: '$49,234',
    status: 'Publish',
    variant: 'bg-success/15 text-success'
  },
  {
    code: '#TAD-232100075',
    name: 'Bovet Fleurier AIFSQ029',
    image: product07,
    category: 'Home Decor',
    price: '$119.99',
    stock: 240,
    revenue: '$20,784',
    variant: 'bg-success/15 text-success',
    status: 'Publish'
  },
  {
    code: '#TAD-232100077',
    name: 'Roar Twill Blue Baseball Cap',
    image: product09,
    category: 'Fashion',
    price: '$49.99',
    stock: 470,
    revenue: '$19,321',
    variant: 'bg-success/15 text-success',
    status: 'Publish'
  },
  {
    code: '#TAD-232100080',
    name: 'Aahwan Solid Women Beige Baggy Shorts',
    image: product08,
    category: 'Fashion',
    price: '$64.70',
    stock: 150,
    revenue: '$13,987',
    variant: 'bg-success/15 text-success',
    status: 'Publish'
  },
  {
    code: '#TAD-232100072',
    name: 'Mesh Ergonomic Black Chair',
    image: product03,
    category: 'Furniture',
    price: '$214.47',
    stock: 400,
    revenue: '$1,24,365',
    variant: 'bg-success/15 text-success',
    status: 'Publish'
  },
  {
    code: '#TAD-232100071',
    name: 'Smartest Printed T-shirt',
    image: product02,
    category: 'Fashion',
    price: '$79.99',
    stock: 500,
    revenue: '$24,365',
    status: 'Scheduled',
    variant: 'bg-danger/15 text-danger'
  }
]
