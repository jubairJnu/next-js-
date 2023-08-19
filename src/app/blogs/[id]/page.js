import LoadSingleBlog from '@/Utils/LoadSingleBlog';
import React from 'react';

const SingleBlog = async({params}) => {
 
  const {id, title, body} = await LoadSingleBlog(params.id);

  return (
    <div className='block border border-blue-500 my-3 pl-3 py-3 ' key={id} >
        <span className='text-xl'>{id}. {title}</span>
        <h1>{body}</h1>
       
         </div>
  );
};

export default SingleBlog;