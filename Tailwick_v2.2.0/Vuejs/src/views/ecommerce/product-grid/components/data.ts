import img02 from '@/assets/images/product/img-02.png'
import img01 from '@/assets/images/product/img-01.png'
import img03 from '@/assets/images/product/img-03.png'
import img04 from '@/assets/images/product/img-04.png'
import img05 from '@/assets/images/product/img-05.png'
import img06 from '@/assets/images/product/img-06.png'
import img08 from '@/assets/images/product/img-08.png'
import img10 from '@/assets/images/product/img-10.png'

export type ProductType = {
  image: string
  heartIcon: string
  heartClass: string
  name: string
  stars: number[]
  starHalf: boolean
  reviewCount: number
  price: string
  originalPrice?: string
}

export const products: ProductType[] = [
  {
    image: img02,
    heartIcon: 'heart',
    heartClass: 'text-danger fill-danger/15',
    name: 'Mesh Ergonomic Black Chair',
    stars: [1, 2, 3, 4],
    starHalf: true,
    reviewCount: 198,
    price: '$674.12',
    originalPrice: '784.09'
  },
  {
    image: img03,
    heartIcon: 'heart',
    heartClass: 'text-default-500 fill-default-100',
    name: 'Fastcolors Typography Men',
    stars: [1, 2, 3, 4],
    starHalf: true,
    reviewCount: 1150,
    price: '$341.99',
    originalPrice: '784.09'
  },
  {
    image: img04,
    heartIcon: 'heart',
    heartClass: 'text-default-500 fill-default-100',
    name: 'Mesh Ergonomic Green Chair',
    stars: [1, 2, 3],
    starHalf: true,
    reviewCount: 29,
    price: '$362.2',
    originalPrice: '599.99'
  },
  {
    image: img05,
    heartIcon: 'heart',
    heartClass: 'text-danger fill-danger/15',
    name: 'Techel Black Bluetooth Sound.',
    stars: [1, 2, 3, 4],
    starHalf: true,
    reviewCount: 1324,
    price: '$249.99',
    originalPrice: '399.99'
  },
  {
    image: img06,
    heartIcon: 'heart',
    heartClass: 'text-default-500 fill-default-100',
    name: 'Bovet Fleurier AIFSQ029',
    stars: [1, 2, 3, 4],
    starHalf: true,
    reviewCount: 1324,
    price: '$496.16'
  },
  {
    image: img08,
    heartIcon: 'heart',
    heartClass: 'text-default-500 fill-default-100',
    name: 'Roar Twill Blue Baseball Cap',
    stars: [1, 2],
    starHalf: true,
    reviewCount: 485,
    price: '$674.12',
    originalPrice: '784.99'
  },
  {
    image: img01,
    heartIcon: 'heart',
    heartClass: 'text-default-500 fill-default-100',
    name: 'Smartest Printed T-shirt',
    stars: [1, 2, 3],
    starHalf: true,
    reviewCount: 5321,
    price: '$89.99'
  },
  {
    image: img10,
    heartIcon: 'heart',
    heartClass: 'text-default-500 fill-default-100',
    name: 'Crop tops for Women western.',
    stars: [1, 2, 3, 4],
    starHalf: true,
    reviewCount: 1551,
    price: '$145',
    originalPrice: '299.99'
  }
]
