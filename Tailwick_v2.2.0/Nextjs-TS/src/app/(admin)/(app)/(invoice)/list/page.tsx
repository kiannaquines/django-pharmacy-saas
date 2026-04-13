import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Metadata } from 'next';
import React from 'react';
import InvoiceList from './components/InvoiceList';
import InvoiceDetails from './components/InvoiceDetails';

export const metadata: Metadata = { title: 'Invoice List' };
const Page = () => {
  return (
    <main>
      <PageBreadcrumb title="List View" subtitle="Menu" />
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
        <InvoiceList />
        <InvoiceDetails />
      </div>
    </main>
  );
};

export default Page;
