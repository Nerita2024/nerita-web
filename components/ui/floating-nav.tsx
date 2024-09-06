"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { useNav } from "@/data";
import { cn } from "@/lib/utils";
import i18n from '../../i18n';
import Image from 'next/image';

type FloatingNavProps = {
  className?: string;
};

const FloatingNav = ({ className }: FloatingNavProps) => {
  const navItems = useNav();
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    const storedLang = localStorage.getItem('lang') || 'en';
    setSelectedLanguage(storedLang);
    i18n.changeLanguage(storedLang);
  }, []);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      if (current < 50) {
        setVisible(true);
      } else {
        setVisible(current <= lastScrollY);
      }
      setLastScrollY(current);
    }
  });

  const handleChangeLanguage = (newLocale: string) => {
    localStorage.setItem('lang', newLocale);
    setSelectedLanguage(newLocale);
    window.location.reload();
  };

  const handleNavItemClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ zIndex: 9999 }}
        className={cn(
          "fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-3xl border border-white/[0.2] bg-black-100 px-3 py-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
      >
        <a href="https://nerita-web.vercel.app/">
          <div className="flex items-center space-x-4 sm:mr-8 mr-0">
            {/* Desktop Logo */}
            <img
              src="/nerita_logo.png"
              alt="Logo"
              className="h-8 w-auto hidden sm:block" // Visible on screens larger than 'sm'
            />
            {/* Mobile Logo */}
            <img
              src="/nerita_logo_no_text.svg" // Path to your mobile version logo
              alt="Mobile Logo"
              className="h-8 w-auto sm:hidden" // Visible on screens smaller than 'sm'
            />
          </div>
        </a>
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            onClick={(e) => handleNavItemClick(e, navItem.link)}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">
              <Image
                src={navItem.icon}
                alt={`icon-${navItem.link}`}
                width={20}
                height={20}
                className="h-4 w-4"
              />
            </span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </a>
        ))}

        <div className="relative">
          <select
            value={selectedLanguage}
            onChange={(e) => handleChangeLanguage(e.target.value)}
            className="text-sm px-2 py-1 rounded bg-black-100 hover:bg-black-200 dark:hover:bg-black-700 sm:ml-8 ml-0"
          >
            <option value="en">English</option>
            <option value="sk">Slovak</option>
          </select>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default dynamic(() => Promise.resolve(FloatingNav), { ssr: false });
