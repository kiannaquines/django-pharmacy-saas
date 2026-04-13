import PageBreadcrumb from '@/components/PageBreadcrumb';
import React from 'react';
import AddNew from './components/AddNew';
import { Metadata } from 'next';

export const metdata: Metadata = { title: 'Add New' };
const Page = () => {
  return (
    <main>
      <PageBreadcrumb title="Add New" subtitle="Menu" />
      <AddNew />
    </main>
  );
};

export default Page;
