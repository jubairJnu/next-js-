import GetAllCategories from '@/Utils/GetAllCategories';
import React from 'react';
import SingleCategory from './SingleCategory';

const Categories = async() => {
  const categories = await GetAllCategories()
  return (
    <div className='container mx-auto md:grid grid-cols-5 gap-5'>
      {
        categories.map(category=> <SingleCategory key={category.id}
        category={category}
        ></SingleCategory> )
      }
      
    </div>
  );
};

export default Categories;