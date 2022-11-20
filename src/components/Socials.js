import React from 'react';

// import icons
import { social } from '../data';

const Socials = () => {
  return (
    <ul className='flex space-x-2 '>
      {social.map((item, index) => {
        return (
          <li
            className='flex justify-center items-center text-accent'
            key={index}
          >
            <a className='font-bold text-primary bg-yellow-600 p-2 rounded-full' href={item.href}>
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
