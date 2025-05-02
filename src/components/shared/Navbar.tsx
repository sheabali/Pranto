'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { logo } from '../constant/global';
import ThemeToggle from '../theme-toggle';
import Download from '../lottie-ui/download-icon';
import SendIcon from '../lottie-ui/eyes';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { resolvedTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const isLightMode = resolvedTheme === 'light';

  return (
    <header
      className={`${
        isLightMode ? 'bg-white' : 'bg-[#0e1c30]'
      } w-full border-b py-4 px-6 sm:px-10`}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo & Hamburger */}
        <div className="flex items-center gap-4">
          {/* Hamburger for Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} width={30} height={30} alt="Logo" />
            <span className="text-lg font-semibold text-gray-800 dark:text-white">
              Portfolio
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex font-medium space-x-6">
          <li className="hover:text-gray-600">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>

        {/* Theme Toggle & Resume Button */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button className="font-bold py-6">
            <SendIcon /> Resume <Download />
          </Button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 px-2">
          <ul className="flex flex-col gap-2 bg-white dark:bg-[#0e1c30] rounded-md shadow-md p-4">
            <li>
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
