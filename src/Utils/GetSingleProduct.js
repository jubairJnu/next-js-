import React from 'react';

const GetSingleProduct = async(id) => {
  const res = await fetch(`http://localhost:5000/products/${id}`)
  return res.json();
};

export default GetSingleProduct;