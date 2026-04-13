import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Metadata } from 'next';
import React from 'react';
import Payments from './components/Payments';

export const metadata: Metadata = { title: 'Sales Payments' };
const Page = () => {
  return (
    <main>
      <PageBreadcrumb title="Sales Payments" subtitle="Menu" />
      <Payments />
    </main>
  );
};

export default Page;
