import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary h-fit w-full '>
      <div className='container mx-auto w-full'>
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
          I also use my social media platforms to put a smile on people’s faces in the best way I can either on my story or on my feed
now, I just released my first book titled “mind stimulating poems” which is a collection of some poems i wrote from 2016-2022.

          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
