import Link from 'next/link';
import { mainNavbarLinks } from '@/utils/data/mainNavbarLinks';
import { Button } from '@/components/ui/button';
import { Menu, ArrowRight } from 'lucide-react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';

const MainNavbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  return (
    <div>
      <div className="fixed grid place-items-center top-6 left-6 z-50 bg-transparent break5:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="bg-black-100 hover:bg-black-100"
            >
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-slate-900 pl-2">
            <DropdownMenuLabel className="text-violet-500">
              Main Links
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {mainNavbarLinks.map((mainLink) => {
                const { id, text, path } = mainLink;
                const isActive = activeLink === text;
                return (
                  <DropdownMenuItem key={id} asChild>
                    <Link
                      href={path}
                      className={`text-white ${
                        isActive ? 'text-[#f97c16] translate-x-1' : ''
                      } font-semibold`}
                      onClick={() => setActiveLink(text)}
                    >
                      <span className="flex gap-2 items-center">
                        {text}
                        <ArrowRight
                          className={`${isActive ? 'w-3 h-3 py-0' : 'hidden'}`}
                        />
                      </span>
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="text-violet-500">
              My Social Media
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link
                href="https://www.linkedin.com/in/branimirdjordjevic82/"
                target="_blank"
                className="flex items-center justify-between"
              >
                LinkedIn
                <FaLinkedin />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="https://github.com/branimir1111"
                target="_blank"
                className="flex items-center justify-between"
              >
                GitHub
                <FaGithub />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="https://www.facebook.com/profile.php?id=100013754237181"
                target="_blank"
                className="flex items-center justify-between"
              >
                Facebook
                <FaFacebook />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="https://x.com/branimir1111"
                target="_blank"
                className="flex items-center justify-between"
              >
                X
                <FaXTwitter />
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <nav className="max-break5:hidden fixed grid place-items-center top-6 left-1/2 -translate-x-1/2 z-50 bg-transparent">
        <div className="bg-black-100 flex gap-4 py-4 px-8 border border-violet-900 rounded-full bg-opacity-70 backdrop-blur-md">
          {mainNavbarLinks.map((mainLink) => {
            const { id, text, path } = mainLink;
            const isActive = activeLink === text;
            return (
              <Link
                key={id}
                href={path}
                className={`text-white ${
                  isActive ? 'text-[#f97c16]' : ''
                } font-semibold hover:text-[#f99e16]`}
                onClick={() => setActiveLink(text)}
              >
                {text}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
export default MainNavbar;
