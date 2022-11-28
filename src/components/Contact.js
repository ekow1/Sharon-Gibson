import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import contact data
import { contact } from '../data';
import Calendly from './Calendly';
import { motion } from 'framer-motion';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5yl9tem', 'template_z4flrul', form.current, '2YRA-zE34qUwmdAZ7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <motion.section className='section bg-hero' id='contact'

    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5 }}
    
    
    >
      <div className='container mx-auto mt-20 lg:mt-5'>
        <div className='flex flex-col items-center text-center mb-12'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Contact me
          </h2>
          <p className='subtitle '>
           
          </p>
        </div>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <div
            className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-yellow-400 rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-yellow-400 font-normal '>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            className='space-y-8 w-full max-w-[780px]'
            ref={form} onSubmit={sendEmail}
          >
            <div className='flex gap-8'>
              <input className='input'name='user_name' type='text' placeholder='Your name' />
              <input className='input'name='user_email' type='email' placeholder='Your email' />
            </div>
            <input className='input' name='subject' type='text' placeholder='Subject' />
            <textarea
              className='textarea'
              placeholder='Your message'
              name='message'
            ></textarea>
           
            <div className=' flex  lg:flex-row gap-3 text-xs md:text-md   '>
            <button className='btn btn-md bg-white text-black hover:bg-secondary-hover md:btn-lg transition-all w-48 text-zinc-900 font-bold' >
             Submit
            </button>
            <button className='btn btn-md bg-yellow-500 hover:bg-secondary-hover md:btn-lg transition-all  lg:text-md text-zinc-900 font-bold w-48'>
           <Calendly />
            </button>

            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
