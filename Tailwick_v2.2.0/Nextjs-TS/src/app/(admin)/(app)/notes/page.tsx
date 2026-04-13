import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Metadata } from 'next';
import React from 'react';
import Notes from './components/Notes';

export const metadata: Metadata = { title: 'Notes' };
const Page = () => {
  return (
    <main>
      <PageBreadcrumb title="Notes" subtitle="Menu" />
      <Notes />
    </main>
  );
};

export default Page;
