import React from 'react';

const GetAllCategories = async() => {
  const res = await fetch('http://localhost:5000/categories',{
    cache:'force-cache'
  })
  return res.json();
};

export default GetAllCategories;