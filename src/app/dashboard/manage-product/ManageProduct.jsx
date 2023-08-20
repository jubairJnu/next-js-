'use client'
import React, { useRef, useState, useTransition } from 'react';
import ManageSingleProducts from './ManageSingleProducts';
import Modal from '@/components/Modal';
import { useRouter } from 'next/navigation';

const ManageProduct = ({products}) => {
  const modalRef = useRef(null);
  const [updateData, setUpdateData] = useState(null);
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);

  const isLoading = isPending || loading;
  
  const router =useRouter()

  const openModal = (product) =>{
    setUpdateData(product);
    modalRef.current.showModal();
  }

  const closeModal = ()=>{
    setUpdateData(null);
    modalRef.current.close();
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const data = { title, price};
    if(title && price){
      try{
        const res =await fetch( `http://localhost:5000/products/${updateData?.id}`,{
          method:"PATCH",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(data)
        } );
        const result = await res.json();
        console.log(result);
        form.reset();
        closeModal();
        startTransition(()=>{
          router.refresh();
        })
      }
      catch{
        console.log(error)
      }
    }
  }
// ***********delete*******//

  const handleDelete = async(id) =>{ 
      try{
        const res =await fetch( `http://localhost:5000/products/${id}`,{
          method:"DELETE",
          
        } );
        const result = await res.json();
             startTransition(()=>{
          router.refresh();
        })
      }
      catch{
        console.log(error)
      
    }
  }

  return (
    <div>
      <table className={`table-auto border ${isLoading? "opacity-30": "opacity-100"}`}>
    <thead>
      <tr>
        <th className="border px-4 py-2">Title</th>
        <th className="border px-4 py-2">Price</th>
        <th className="border px-4 py-2">Update</th>
        <th className="border px-4 py-2">Delete</th>
      </tr>
    </thead>
    <tbody>
    {
      products.map(product=> <ManageSingleProducts key={product.id}
      product={product} openModal={openModal} handleDelete={handleDelete}
      ></ManageSingleProducts>)
    }
    </tbody>
  </table>
<Modal ref={modalRef} closeModal={closeModal} updateData={updateData} handleSubmit={handleSubmit} />
    </div>
  );
};

export default ManageProduct;