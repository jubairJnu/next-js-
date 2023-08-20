import React from 'react';

const ManageSingleProducts = ({product, openModal}) => {
  const {id, title,price,categoryId,imageUrl} = product;
  return (
   
      <tr>
        <td className="border px-4 py-2">{title}</td>
        <td className="border px-4 py-2">{price}</td>
        <td className="border px-4 py-2">
          <button onClick={()=> openModal(product)} className='bg-blue-500 text-white p-2 rounded'>Update</button>
        </td>
        <td className="border px-4 py-2">
        <button className='bg-blue-500 text-white p-2 rounded'>Delete</button>
        </td>
      </tr>
    
  );
};

export default ManageSingleProducts;