import React from 'react';

const SingleBlog = ({params}) => {
 
const [year, id] = params.segment;
console.log(year, id)

  return (
    <div>
      <h1>Singel Blog {year}  for {id} </h1>
    </div>
  );
};

export default SingleBlog;