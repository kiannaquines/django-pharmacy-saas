import { Metadata } from 'next';
import SidenavHover from './components/SidenavHover';

export const metadata: Metadata = { title: 'Hover View Sidenav' };
const Page = () => {
  return (
    <main>
      <SidenavHover />
    </main>
  );
};

export default Page;
