import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Metadata } from 'next';
import React from 'react';
import AddLeave from './components/AddLeave';

export const metadata: Metadata = { title: 'Add Leave (Employee)' };
const Page = () => {
  return (
    <main>
      <PageBreadcrumb title="Add Leave (Employee)" subtitle="Menu" />
      <AddLeave />
    </main>
  );
};

export default Page;
