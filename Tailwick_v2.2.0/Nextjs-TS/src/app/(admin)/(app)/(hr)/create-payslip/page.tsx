import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Metadata } from 'next';
import React from 'react';
import CreatesSlip from './components/CreatesSlip';

export const metadata: Metadata = { title: 'Create Payslip' };
const Page = () => {
  return (
    <main>
      <PageBreadcrumb title="Create Payslip" subtitle="Menu" />
      <CreatesSlip />
    </main>
  );
};

export default Page;
