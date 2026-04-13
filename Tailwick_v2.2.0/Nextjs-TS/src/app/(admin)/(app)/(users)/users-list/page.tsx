import PageBreadcrumb from '@/components/PageBreadcrumb';
import React from 'react';
import UserListTabel from './components/UserListTabel';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'List View' };
const Page = () => {
  return (
    <main>
      <PageBreadcrumb subtitle="Users" title="List view" />
      <UserListTabel />
    </main>
  );
};

export default Page;
