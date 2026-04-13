import { Metadata } from 'next';
import DarkMode from './components/DarkMode';

export const metadata: Metadata = { title: 'Dark Mode' };
const Page = () => {
  return (
    <main>
      <DarkMode />
    </main>
  );
};

export default Page;
