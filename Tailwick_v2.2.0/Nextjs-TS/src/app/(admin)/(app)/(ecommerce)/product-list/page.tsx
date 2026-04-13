import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Metadata } from 'next';
import React from 'react';
import ProductList from './components/ProductList';

export const metadata: Metadata = { title: 'Product List' };
const Page = () => {
  return (
    <main>
      <PageBreadcrumb title="List view" subtitle="Products" />
      <ProductList />
    </main>
  );
};

export default Page;
