'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '../elements/Logo';
import { listItemVariants, listVariants } from '@/app/lib/animation/HeaderAnimation';
import XIcon from '../elements/XIcon';
import Like from '../../assets/svg/like.svg';
import Person from '../../assets/svg/person.svg';
import styles from './layout.module.css';

const navLinksData = [
  {
    href: '/jobs',
    value: 'Jobs',
  },
  {
    href: '/liked',
    value: <Like />,
  },
  {
    href: '/create-profile',
    value: <Person />,
  },
];

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 ">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 md:p-8 ">
        <span className="text-3xl md:text-6xl">
          <Logo />
        </span>
        <div className="mobile-menu block md:hidden">
          <button
            className="w-7 h-6 flex flex-col justify-between z-50 "
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <XIcon isOpenMenu={navbarOpen} />
          </button>
        </div>
        <div className="menu hidden md:block md:w-auto ">
          <div className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center">
            {navLinksData.map((link) => (
              <Link
                href={link.href}
                className={` text-[#ADB7BE] ${styles.shine} text-2xl hover:opacity-45`}
                key={link.href}
              >
                {link.value}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {navbarOpen && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute top-0 left-0 w-screen h-screen bg-[#121212] text-slate-300 flex flex-col items-center justify-center gap-5 md:hidden z-10"
        >
          {navLinksData.map((link) => (
            <motion.div variants={listItemVariants} key={link.href}>
              <Link href={link.href} className="flex md:p-0 text-2xl md:flex-row md:space-x-8 mt-0">
                {link.value}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Header;
