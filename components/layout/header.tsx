'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { buttonVariants } from '@/components/variants/button-variants';
import { cn } from '@/lib/utils/style';
import { new_sparkpoint_logo_full_dark, new_sparkpoint_logo_full_light } from '@/lib/assets';

const nav_links = [
  { name: "SparkAgent", href: "/#sparkagent" },
  { name: "Roadmap", href: "/#roadmap" },
  { name: "About", href: "/#about" },
  { name: "Team", href: "/#team" },
  { name: "Articles", href: "/#articles" },
  { name: "Blogs", href: "/#blogs" }
]
const Header = ({ className }: { className?: string }) => {

  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const toggleMenu = () => setIsOpen(!isOpen);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
    if (isOpen) {
      setIsOpen(false);
    }
  });
  return (
    <AnimatePresence mode="wait">
      <motion.div
        id="navbar"
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed top-4 left-0 right-0 z-50 flex mx-4 items-center justify-between p-4 border border-black rounded-[1.7rem] gap-1 flex-col md:flex-row md:mx-12 lg:mx-24 xl:mx-auto px-4 md:px-12 py-4 max-w-screen-lg",
          className
        )}
      >

        {/* Mobile Menu Button */}
        <div className="absolute -top-1 md:hidden flex items-center justify-between w-full px-4 py-2">
          <Link href="/#">
            <Image
              src={new_sparkpoint_logo_full_dark}
              alt="SparkPoint Logo"
              className="md:h-8 h-4 w-fit sparkpoint-logo-dark"
            />
            <Image
              src={new_sparkpoint_logo_full_light}
              alt="SparkPoint Logo"
              className="md:h-8 h-4 w-fit absolute top-[12px] sparkpoint-logo-light"
            />
          </Link>
          <button onClick={toggleMenu} className="nav-toggle">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {!isOpen &&
          (
            <div className='hidden md:flex items-center justify-between w-full'>
              <Link href="/#">
                <Image
                  src={new_sparkpoint_logo_full_dark}
                  alt="SparkPoint Logo"
                  className="md:h-8 h-4 w-fit"
                />
                <Image
                  src={new_sparkpoint_logo_full_light}
                  alt="SparkPoint Logo"
                  className="md:h-8 h-4 w-fit absolute top-[20px] sparkpoint-logo-light"
                />
              </Link>
              <nav className="flex items-center justify-center gap-6">
                {nav_links.map((link, index) => (
                  <Link key={index} href={link.href} className="nav-item hover:text-gray-900">
                    {link.name}
                  </Link>
                ))}
              </nav>
              <Link href="https://app.sparkpoint.io/" target='_blank'>
                <button className={buttonVariants({ variant: "outline", size: "md", className: "border active:drop-shadow-none px-8 py-3 transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000] hover:bg-[#D6F2FE] hover:shadow-[0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none shrink-0 button-1" })}>
                  Launch App
                </button>
              </Link>
            </div>
          )
        }

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full md:hidden grid items-center gap-4 mt-2 px-4"
            >
              <nav className="flex items-center justify-center gap-6 flex-col mx-auto">
                {nav_links.map((link, index) => (
                  <Link key={index} href={link.href} className="nav-item text-gray-600 hover:text-gray-900">
                    {link.name}
                  </Link>
                ))}
              </nav>
              <Link className={buttonVariants({ variant: "outline", size: "md", className: "bg-white border w-full border-black active:drop-shadow-none px-8 py-3 transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000] hover:bg-[#D6F2FE] active:translate-x-0 active:translate-y-0 active:shadow-none shrink-0 button-1" })} href="https://app.sparkpoint.io/" target='_blank'>
                Launch App
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default Header;
