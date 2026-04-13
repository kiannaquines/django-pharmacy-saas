import { Routes } from "@angular/router";
import { Products } from "./products/products";
import { ProductGrid } from "./product-grid/product-grid";
import { ProductDetails } from "./product-details/product-details";
import { ShoppingCart } from "./shopping-cart/shopping-cart";
import { Checkout } from "./checkout/checkout";
import { ProductCreate } from "./product-create/product-create";
import { Orders } from "./orders/orders";
import { OrderDetails } from "./order-details/order-details";
import { Sallers } from "./sallers/sallers";

export const ECOMMERCE_ROUTES: Routes = [
  {
    path: 'e-commerce/product-list',
    component: Products,
    data: { title: 'Product List' },
  },
  {
    path: 'e-commerce/product-grid',
    component: ProductGrid,
    data: { title: 'Product Grid' },
  },
  {
    path: 'e-commerce/product-overview',
    component: ProductDetails,
    data: { title: 'Product Overview' },
  },
  {
    path: 'e-commerce/cart',
    component: ShoppingCart,
    data: { title: 'Shopping Cart' },
  },
  {
    path: 'e-commerce/checkout',
    component: Checkout,
    data: { title: 'Checkout' },
  },
  {
    path: 'e-commerce/product-create',
    component: ProductCreate,
    data: { title: 'Product Create' },
  },
  {
    path: 'e-commerce/orders',
    component: Orders,
    data: { title: 'Orders' },
  },
  {
    path: 'e-commerce/order-overview',
    component: OrderDetails,
    data: { title: 'Order Overview' },
  },
  {
    path: 'e-commerce/sellers',
    component: Sallers,
    data: { title: 'Sellers' },
  }
]