import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Metadata } from 'next';
import React from 'react';
import EmployeeDetails from './components/EmployeeDetails';
import EmployeeWorkDetails from './components/EmployeeWorkDetails';
import EmployeeWork from './components/EmployeeWork';

export const metadata: Metadata = { title: 'Attendance' };
const Page = () => {
  return (
    <main>
      <PageBreadcrumb title="Attendance" subtitle="Menu" />
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
        <EmployeeDetails />
        <div className="lg:col-span-3 col-span-1">
          <EmployeeWorkDetails />
          <EmployeeWork />
        </div>
      </div>
    </main>
  );
};

export default Page;
