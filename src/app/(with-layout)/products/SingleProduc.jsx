import Link from 'next/link';
import React from 'react';

const SingleProduc = ({product}) => {
  const {id, title, name} = product;
  return (
    <div className='border-2 border-blue-500 rounded-md p-2 text-center'>
     <Link href={`products/${id}`}> <h1>{title}</h1></Link>
    </div>
  );
};

export default SingleProduc;