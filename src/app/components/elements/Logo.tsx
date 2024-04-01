import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link
      href={'/'}
      className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 transition duration-300 glowing-text font-semibold"
    >
      JobSearch
    </Link>
  );
};

export default Logo;
