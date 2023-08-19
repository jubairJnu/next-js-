import GetSingleProduct from '@/Utils/GetSingleProduct';
import React from 'react';

const SingleProductPage = async({ params }) => {

  const {title,price} =await GetSingleProduct(params.id)

  return (
    <div>
     <h1 className='text-2xl font-semibold'> {title}</h1>
    </div>
  );
};

export default SingleProductPage;