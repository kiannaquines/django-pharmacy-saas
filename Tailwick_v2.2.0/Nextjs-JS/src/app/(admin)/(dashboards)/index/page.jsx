import PageBreadcrumb from '@/components/PageBreadcrumb';
import React from 'react';
import WelcomeUser from './components/WelcomeUser';
import ProductOrderDetails from './components/ProductOrderDetails';
import OrderStatistics from './components/OrderStatistics';
import SalesRevenueOverview from './components/SalesRevenueOverview';
import TrafficResources from './components/TrafficResources';
import ProductOrders from './components/ProductOrders';
import CustomerService from './components/CustomerService';
import SalesThisMonth from './components/SalesThisMonth';
import TopSellingProducts from './components/TopSellingProducts';
import Audience from './components/Audience';
export const metadata = {
  title: 'index'
};
const Page = () => {
  return <main>
      <PageBreadcrumb title="Ecommerce" subtitle="Dashboards" />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
        <div className="lg:col-span-2 col-span-1">
          <WelcomeUser />
          <ProductOrderDetails />
        </div>
        <OrderStatistics />
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
        <SalesRevenueOverview />
        <TrafficResources />
      </div>
      <ProductOrders />
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
        <CustomerService />
        <SalesThisMonth />
        <TopSellingProducts />
        <Audience />
      </div>
    </main>;
};
export default Page;