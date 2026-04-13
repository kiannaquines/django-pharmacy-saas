import { Metadata } from 'next';
import SmallNav from './components/SmallNav';

export const metadata: Metadata = { title: 'Small Sidenav' };
const Page = () => {
  return (
    <>
      <main>
        <SmallNav />
      </main>
    </>
  );
};

export default Page;
