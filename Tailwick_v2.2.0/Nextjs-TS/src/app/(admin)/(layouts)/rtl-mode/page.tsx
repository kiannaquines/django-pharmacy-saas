import React from 'react';
import RtlMode from './components/RtlMode';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'RTL Mode' };
const Page = () => {
  return (
    <main>
      <RtlMode />
    </main>
  );
};

export default Page;
