import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul className='flex justify-evenly bg-blue-600'>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/login">login</Link>
        </li>
        <li>
          <Link href="/buy_fish">Buy Fish</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
