import React from 'react';

// import img
import Image from '../assets/img/sharon.JPG';
import Calendly from './Calendly';
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section className='section bg-primary lg:px-20 min-h-screen'   

    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5 }}
    
    >
      <div className='container mx-auto h-full  mb-12'>
        <div className='flex flex-col xl:flex-row md:flex-row lg:gap-x-24  mt-12 lg:mt-2'>
          <img 
            className=' lg:flex flex-1  object-cover h-96 w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-leftr lg:items-start lg:text-left lg:mt-10 mt-24'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Sharon Gibson
              </h2>
              <p className='mb-4 text-yellow-400'>
              A poet and mindset coach
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-4 text-md'>
              I am Sharon Gibson, born in Nigeria, raised in Ghana and currently living in Europe. I have been writing for over a decade now since I discovered my talent in high school; Achimota school, my alma mata in Ghana which taught me ‘ I am a living water to a thirsty land’ and that is one of the words that drives me till today. 

              </p>
              <p className='mb-4 text-md'>
              I started with erotic poems and gravitated towards writing more about life as I grew older and began to experience the diversity and controversies of life. 

              </p>
             
              <p className='mb-4 text-md'>
              I am driven by my love for people and that is my inspiration whenever I am write. I hope to inspire you to live a very happy and fulfilling life regardless of circumstances around you, whether good or bad. 

              </p>
            </div>
            <div className=' flex flex-col lg:flex-row gap-3 text-sm md:text-md   mt-10'>
            <Link
                to='/work'
                
               
              >
                 <button className='btn btn-md bg-white text-black hover:bg-secondary-hover md:btn-lg transition-all w-48 text-zinc-900 font-bold'>
              Buy my book
            </button>
              </Link>
            <button className='btn btn-md bg-yellow-500 hover:bg-secondary-hover md:btn-lg transition-all  text-zinc-900 font-bold w-48 '>
          <Calendly />
            </button>

            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
