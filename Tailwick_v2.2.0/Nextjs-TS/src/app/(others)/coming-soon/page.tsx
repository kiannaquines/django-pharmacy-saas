import React from 'react';
import CommingSoon from './components/CommingSoon';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Coming Soon' };
const page = () => {
  return <CommingSoon />;
};

export default page;
