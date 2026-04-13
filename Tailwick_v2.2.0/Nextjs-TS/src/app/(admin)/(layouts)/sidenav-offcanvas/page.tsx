import React from 'react';
import SideOffcanvase from './components/SideOffcanvase';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Offcanvas Sidenav' };
const Page = () => {
  return (
    <main>
      <SideOffcanvase />
    </main>
  );
};

export default Page;
