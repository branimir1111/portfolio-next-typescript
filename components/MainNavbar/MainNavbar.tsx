import Link from 'next/link';
import { mainNavbarLinks } from '@/utils/data/mainNavbarLinks';

const MainNavbar = () => {
  return (
    <nav className="fixed grid place-items-center top-6 left-1/2 -translate-x-1/2 z-50 bg-transparent">
      <div className="bg-black-100 flex gap-4 py-4 px-8 border border-violet-900 rounded-full bg-opacity-70 backdrop-blur-md">
        {mainNavbarLinks.map((mainLink) => {
          const { id, text, path } = mainLink;
          return (
            <Link key={id} href={path} className="text-white">
              {text}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
export default MainNavbar;
