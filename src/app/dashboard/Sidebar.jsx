import { Ultra } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
const sideLink =  [
{
  path:'/dashboard',
  title:'Dashboard'
},
{
  path:'/dashboard/add-product',
  title:'Add Product'
},
{
  path:'/dashboard/manage-product',
  title:'Manage Product'
},
{
  path:'/',
  title:'Home'
}

]

const Sidebar = () => {
  return (
    <aside className='mr-10'>
      <h1 className='text-2xl'>Dashboard</h1>
    <ul>
    {
        sideLink.map(({path,title}) => <li className='my-3' key={path}>
          <Link href={path}>{title}</Link>
        </li> )
      }
    </ul>
    </aside>
  );
};

export default Sidebar;