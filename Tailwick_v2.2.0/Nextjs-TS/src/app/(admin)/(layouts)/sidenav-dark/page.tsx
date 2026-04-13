import React from 'react';
import SideDark from './components/SideDark';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Sidenav Dark' };
const Page = () => {
  return (
    <main>
      <SideDark />
    </main>
  );
};

export default Page;
