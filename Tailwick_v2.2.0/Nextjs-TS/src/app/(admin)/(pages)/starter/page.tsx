import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = { title: 'Starter' };
const Page = () => {
  return (
    <main>
      <PageBreadcrumb title="Starter" subtitle="Menu" />
      <div className="card h-40"></div>
    </main>
  );
};

export default Page;
