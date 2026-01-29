"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { logo } from "../constant/global";
import DownloadIcon from "../lottie-ui/download-icon";
import SendIcon from "../lottie-ui/eyes";
import ThemeToggle from "../theme-toggle";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [hasMounted, setHasMounted] = useState(false);

  const { resolvedTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
  ];

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash);
    setActiveHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [sidebarOpen]);

  if (!hasMounted) return null;

  const isLightMode = resolvedTheme === "light";

  const isActive = (href: string) =>
    href.startsWith("#") ? activeHash === href : pathname === href;

  const handleNavigation = (path: string) => {
    if (path.startsWith("#")) {
      const el = document.querySelector(path);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      window.location.hash = path;
    } else {
      router.push(path);
    }
    setSidebarOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? `${isLightMode ? "bg-white/80" : "bg-[#0e1c30]/80"} backdrop-blur-md shadow-sm`
            : `${isLightMode ? "bg-white/70" : "bg-[#0e1c30]/70"} backdrop-blur-sm`
        }`}
      >
        <div className="mx-auto flex items-center justify-between py-4 px-6 sm:px-10 max-w-7xl">
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 active:scale-95"
              aria-label="Open mobile menu"
            >
              <Menu size={24} className="text-gray-700 dark:text-gray-300" />
            </button>

            <Link href="/" className="flex items-center gap-2">
              <Image src={logo} width={30} height={30} alt="Logo" />
              <span className="text-lg font-semibold text-gray-800 dark:text-white">
                Portfolio
              </span>
            </Link>
          </div>

          {/* Desktop Full Navigation */}
          <div className="hidden lg:flex items-center justify-between w-full gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image src={logo} width={40} height={40} alt="Logo" />
              <span className="text-lg font-semibold text-gray-800 dark:text-white">
                Portfolio
              </span>
            </Link>

            {/* Navigation Links */}
            <ul className="flex font-medium space-x-6">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className={`transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-gray-900 dark:text-white underline underline-offset-4"
                        : "text-gray-700 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 shrink-0">
              <ThemeToggle />

              <Button className="w-full rounded-full font-bold py-6 text-black text-lg">
                <SendIcon /> Resume <DownloadIcon />
              </Button>
            </div>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="h-[75px]" />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 sm:w-80 ${
          isLightMode ? "bg-white" : "bg-[#0e1c30]"
        } shadow-2xl transform transition-transform duration-300 ease-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col justify-between`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Image src={logo} width={40} height={40} alt="Logo" />
            <span className="text-lg font-semibold text-gray-800 dark:text-white">
              Portfolio
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 active:scale-95"
            aria-label="Close mobile menu"
          >
            <X size={24} className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-6 py-6 space-y-3 overflow-y-auto">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleNavigation(item.href)}
              className={`w-full text-left py-4 px-5 rounded-xl text-lg font-medium transition-all duration-200 active:scale-95 ${
                isActive(item.href)
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="px-6 pb-8 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Button className="w-full font-bold py-6 text-black text-lg">
            <SendIcon /> Resume <DownloadIcon />
          </Button>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
