import LoadBlogData from '@/Utils/LoadBlogData';
import Link from 'next/link';
import React from 'react';

const blogs = [
  {
    id:1,
    title: 'title 1',
    year: 2015
  },
  {
    id:2,
    title: 'title 2',
    year: 2015
  },
  {
    id:3,
    title: 'title 3',
    year: 2015
  },
  {
    id: 4,
    title: 'title 4',
    year: 2015
  },
  {
    id:5,
    title: 'title-5',
    year: 2015
  },

]

const BlogPage = async () => {

  const blogs = await LoadBlogData();

  return (
    <div className='container mx-auto'>
      <h1>BlogPage</h1>

      {
        blogs.map(({id, body, title})=> 
       <div className='block border border-blue-500 my-3 pl-3 py-3 ' key={id} >
        <span className='text-xl'>{id}. {title}</span>
        <h1>{body}</h1>
         <Link className='inline-block mt-4 text-white ' href={`blogs//${id}`}>
          <button className='bg-blue-500 rounded-lg p-2'>Details</button>
         </Link>
         </div>
         )
      }

    </div>
  );
};

export default BlogPage;