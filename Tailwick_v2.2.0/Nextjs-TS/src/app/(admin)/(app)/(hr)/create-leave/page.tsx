import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Metadata } from 'next';
import React from 'react';
import CreateLeave from './components/CreateLeave';

export const metadata: Metadata = { title: 'Add Leave (HR)' };
const Page = () => {
  return (
    <main>
      <PageBreadcrumb title="Add Leave (HR)" subtitle="Menu" />
      <CreateLeave />
    </main>
  );
};

export default Page;
