import React from 'react';

// import navigation data
import { navigation } from '../data';

// import Link
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className=''>
      <ul className='flex space-x-6 capitalize text-[15px] '>
        {navigation.map((item, idx) => {
          return (
            <li
              className='text-white hover:text-white cursor-pointer'
              key={idx}
            >
              <Link
                to={item.href}
                activeClass='active'
               
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
