import Link from 'next/link';
import React from 'react';

const SingleCategory = ({category}) => {
  const {id, name} = category;
  return (
    <Link className='border-2 border-blue-500 rounded-md p-2 text-center' href={`/products?categoryId=${id}`}>
      <h1>{name}</h1>
    </Link>
  );
};

export default SingleCategory;