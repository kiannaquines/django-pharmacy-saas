import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Metadata } from 'next';
import Calender from './components/Calender';

export const metadata: Metadata = { title: 'Calendar' };
const Page = () => {
  return (
    <main>
      <PageBreadcrumb title="Calendar" subtitle="Menu" />
      <div className="grid lg:grid-cols-4 gap-5">
        <Calender />
      </div>
    </main>
  );
};

export default Page;
