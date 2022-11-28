import React from 'react';

// import social data
import { social } from '../data';
import { motion } from 'framer-motion';

// import logo
import Logo from '../assets/img/logo.svg';

const Footer = () => {
  return (
    <motion.footer className='bg-primary py-2'
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5 }}
    
    >
      <div className='container mx-auto backdrop-blur-sm backdrop-opacity-60'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-center'>
          {/* <div className='flex space-x-6 items-center justify-center '>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-accent text-base' href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div> */}
          <div>
            {/* <img src={Logo} alt='' /> */}
          </div>
          <p className='text-paragraph text-white text-[15px]'>
            &copy; {new Date().getFullYear()}  Sharon Gibson. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
