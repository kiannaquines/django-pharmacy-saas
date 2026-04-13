import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Metadata } from 'next';
import React from 'react';
import DeleteModal from './components/DeleteModal';
import AddDepartment from './components/AddDepartment';
import Departments from './components/Departments';

export const metadata: Metadata = { title: 'Departments' };
const Page = () => {
  return (
    <main>
      <PageBreadcrumb title="Departments" subtitle="Menu" />
      <Departments />
      <DeleteModal />
      <AddDepartment />
    </main>
  );
};

export default Page;
