import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Metadata } from 'next';
import React from 'react';
import Expenses from './components/Expenses';
import ExpensesModal from './components/ExpensesModal';

export const metadata: Metadata = { title: 'Sales Expenses' };
const Page = () => {
  return (
    <main>
      <PageBreadcrumb title="Sales Expenses" subtitle="Menu" />
      <Expenses />
      <ExpensesModal />
    </main>
  );
};

export default Page;
