import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Metadata } from 'next';
import React from 'react';
import Pricing from './components/PricingCard';
import HorizontalPricing from './components/HorizontalPricing';

export const metadata: Metadata = { title: 'Pricing' };
const Page = () => {
  return (
    <main>
      <PageBreadcrumb title="Pricing" subtitle="Pages" />
      <Pricing />
      <HorizontalPricing />
    </main>
  );
};

export default Page;
