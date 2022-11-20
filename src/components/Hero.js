import React from 'react';

// import woman image
import WomanImg from '../assets/img/-mg-0060-edit.JPG';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:max-h-[95vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-white text-md mt-[20px]'>
              Hey, I'm Sharon ! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-8xl lg:leading-[1] font-bold md:tracking-[-2px] '>
              Mind <br /> <span className='text-yellow-600'> Simulating  </span>   <br />Poems.
            </h1>
            <p className='pt-4 pb-5 md:pt-6 md:pb-10 max-w-[480px] text-lg text-center lg:text-left'>
              A poet and mindset coach
            </p>
            <div className=' flex flex-col lg:flex-row gap-3 text-sm md: text-md   '>
            <button className='btn btn-md bg-white text-black hover:bg-secondary-hover md:btn-lg transition-all w-48'>
              Buy my book
            </button>
            <button className='btn btn-md bg-yellow-500 hover:bg-secondary-hover md:btn-lg transition-all  text-zinc-900 font-bold'>
             Book a free  <br />  talk session with me
            </button>

            </div>
            
          </div>
          <div className='hidden lg:flex flex-1 justify-center items-center  flex items-center w-auto h-screen'>
            <img src={WomanImg} alt='' className=' aboslute w-9/12 h-full mixed-blend-overlay' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
