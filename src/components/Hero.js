import React from 'react';

// import woman image
import WomanImg from '../assets/img/-mg-0060-edit.JPG';
import Calendly from './Calendly';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      id='home'
      className='h-[96vh]  flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-28 lg:py-0 overflow-hidden '
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5 }}
    >
      <div className='container mx-auto '>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-2xl text-white lg:text-sm mt-[20px]  lg:mb-0 mb-5'>
              Hey, I'm Sharon ! 👋
            </p>
            <h1 className='text-5xl leading-[44px] md:text-5xl md:leading-tight lg:text-8xl lg:leading-[1] font-bold md:tracking-[-2px] mb-10 lg:mb-0  '>
              Mind <br /> <span className='text-yellow-600'> Simulating  </span>   <br />Poems.
            </h1>
            <p className='pt-4 pb-5 md:pt-6 md:pb-10 max-w-[480px] lg:text-lg text-xl text-center lg:text-left'>
              A poet and mindset coach
            </p>
            <div className=' flex flex-col lg:flex-row gap-3 text-sm md: text-md   '>
            <button className='btn btn-md bg-white text-black hover:bg-secondary-hover md:btn-lg transition-all w-48 text-zinc-900 font-bold'>
              Buy my book
            </button>
            <button className='btn btn-md bg-yellow-500 hover:bg-secondary-hover md:btn-lg transition-all  text-zinc-900 font-bold w-48'>
            <Calendly />
            </button>

            </div>
            
          </div>
          <div className='hidden  lg:flex flex-1 justify-center items-center  flex items-center w-auto h-screen'>
            <img src={WomanImg} alt='' className=' aboslute w-11/12 h-full mixed-blend-overlay' />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
