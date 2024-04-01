'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface XIconProps {
  isOpenMenu: boolean;
}

const XIcon = ({ isOpenMenu }: XIconProps) => {
  const menuTopVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };

  const menuCenterVariants = {
    closed: {
      opacity: 1,
    },
    opened: { opacity: 0 },
  };
  const menuBottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };

  return (
    <>
      <motion.div
        variants={menuTopVariants}
        animate={isOpenMenu ? 'opened' : 'closed'}
        className="w-7 h-1 bg-slate-400  rounded origin-left z-50 "
      ></motion.div>
      <motion.div
        variants={menuCenterVariants}
        animate={isOpenMenu ? 'opened' : 'closed'}
        className="w-7 h-1 bg-slate-400  rounded z-50"
      ></motion.div>
      <motion.div
        variants={menuBottomVariants}
        animate={isOpenMenu ? 'opened' : 'closed'}
        className="w-7 h-1 bg-slate-400 rounded  origin-left z-50 "
      ></motion.div>
    </>
  );
};

export default XIcon;
