import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center '>
      <div className='mb-8 object-cover'>
        <img className='rounded-2xl h-80 w-585' src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <a href={item.href} target="blank"><button className=' border m-4 w-24 py-2 hover:bg-white hover:text-black' >{item.action}</button> </a>
    </div>
  );
};

export default Project;
