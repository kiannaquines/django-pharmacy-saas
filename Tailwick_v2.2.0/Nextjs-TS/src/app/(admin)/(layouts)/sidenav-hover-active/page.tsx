import { Metadata } from 'next';
import SidenavHoverActive from './components/SidenavHoverActive';

export const metadata: Metadata = { title: 'Hover Active Sidenav' };
const Page = () => {
  return (
    <main>
      <SidenavHoverActive />
    </main>
  );
};

export default Page;
