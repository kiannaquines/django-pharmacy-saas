import PageBreadcrumb from '@/components/PageBreadcrumb';
import React from 'react';
import UserListTabel from './components/UserListTabel';
export const metadata = {
  title: 'List View'
};
const Page = () => {
  return <main>
      <PageBreadcrumb subtitle="Users" title="List view" />
      <UserListTabel />
    </main>;
};
export default Page;