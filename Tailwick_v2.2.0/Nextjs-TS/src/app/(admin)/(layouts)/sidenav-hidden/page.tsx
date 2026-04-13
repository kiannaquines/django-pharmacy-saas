import React from 'react';
import SideHidden from './components/SideHidden';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Hidden Sidenav' };
const Page = () => {
  return (
    <main>
      <SideHidden />
    </main>
  );
};

export default Page;
