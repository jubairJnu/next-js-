import Link from 'next/link';
import React from 'react';
const NavLink = [
  {
  path: '/',
  title: 'Home'
  },
  {
  path: '/about',
  title: 'About'
  },
  {
  path: '/profile',
  title: 'Profile'
  },
  {
  path: '/blogs',
  title: 'Blogs'
  },
  {
  path: '/dashboard',
  title: 'Dashboard'
  },

]

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between container mx-auto'>
      <h1 className='text-cyan-500 font-semibold'>Next Hero</h1>
      <ul className='flex justify-center'>
        {
          NavLink.map(({path, title}) => <li className='mx-2' key={path}>
            <Link href={path}>{title}</Link>
          </li> )
        }
      </ul>
      
    </nav>
  );
};

export default Navbar;