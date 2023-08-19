import GetAllProducts from '@/Utils/GetAllProducts';
import React from 'react';
import SingleProduc from './SingleProduc';

const ProductsPage = async({ searchParams }) => {
  const products = await GetAllProducts(searchParams.categoryId)
  return (
    <div className='md:grid grid-cols-4 gap-4 my-5 container mx-auto'>
      {
        products.map(product => <SingleProduc key={product.id}
        product={product}/> )
      }
    </div>
  );
};

export default ProductsPage;