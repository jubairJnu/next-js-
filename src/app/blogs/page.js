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

const BlogPage = () => {
  return (
    <div>
      <h1>BlogPage</h1>

      {
        blogs.map(({id, year, title})=> <Link href={`blogs/${year}/${id}`}
         key={id}>
          {title}
         </Link>)
      }

    </div>
  );
};

export default BlogPage;