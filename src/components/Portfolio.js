import React from 'react';
import { motion } from 'framer-motion';
// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <motion.section id='portfolio' className='section bg-primary min-h-screen w-full ' 

    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5 }}
    
    >
      <div className='container mx-auto w-full mt-20 lg:mt-5 h-full'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            My latest work
          </h2>
          <p className='subtitle w-full text-left text-sm'>
          I have had a podcast for almost a year now which I release every Tuesday. The podcast is geared towards helping my audience build a strong and positive mindset which in turn will transform their life. 
          </p>
          <p className='subtitle w-full text-left text-sm'>
          I have people from over 5 destinations listening to me like Ghana, united states, Germany, United Kingdom, France etc. And currently I have 210 plays all time since I started.  
          </p>
          <p className='subtitle w-full text-left text-sm mb-5'>
          I just released my first book titled “mind stimulating poems” which is a collection of some poems i wrote from 2016-2022.

          </p>
        </div>
        <Projects />
      </div>
    </motion.section>
  );
};

export default Portfolio;
