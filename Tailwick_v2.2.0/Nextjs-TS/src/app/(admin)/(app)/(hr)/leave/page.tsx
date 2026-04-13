import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Metadata } from 'next';
import React from 'react';
import LeaveCard from './components/LeaveCard';
import LeaveTabel from './components/LeaveTabel';
import Modal from './components/Modal';

export const metadata: Metadata = { title: 'Leave Manage (HR)' };
const Page = () => {
  return (
    <main>
      <PageBreadcrumb title="Leave Manage (HR)" subtitle="Menu" />
      <LeaveCard />
      <LeaveTabel />
      <Modal />
    </main>
  );
};

export default Page;
