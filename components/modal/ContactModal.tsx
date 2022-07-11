import React, { MouseEventHandler, useState } from 'react';
import { motion } from 'framer-motion';
import { RoughNotation } from 'react-rough-notation';

type ContactModalProps = {
  isOpen: boolean,
  handleModalOpen: MouseEventHandler<HTMLDivElement>
}

export const ContactModal = ({ isOpen, handleModalOpen }: ContactModalProps) => {
  const [inputs, setInputs] = useState({
    email: '',
    tel: 0,
    message: ''
  });
  const handleChange = (event: React.FormEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { name } = event.target as HTMLInputElement;
    const { value } = event.target as HTMLInputElement;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const res = await fetch('https://hook.eu1.make.com/51i28g03gtpttp6y6wir6coq4b7z8bng', {
      method: 'POST',
      body: JSON.stringify(
        inputs
      ),
    });
    const resJson = await res;
    if (res.status === 200) {
      console.log(resJson);
      handleModalOpen(event);
    } else {
      alert('Some error occured');
    }
  };
  return (
    <div>
      <div onClick={handleModalOpen} className={isOpen ? 'fixed top-0 w-full h-full bg-secondary/10 overflow-auto z-30 ' : 'hidden'} />
      <div
        className={isOpen ? 'fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-auto md:w-1/2 max-w-3xl h-auto py-12 bg-primary rounded-2xl font-light z-40' : 'hidden'}
      >
        <h1 className='mb-12 text-center px-12 text-6xl text-secondary font-light'>
          <RoughNotation color='#8b6f00' show={isOpen} strokeWidth={1} type='underline'>Contact me</RoughNotation>
        </h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6 items-start px-8 md:px-20 text-left text-secondary'>
          <div className='flex flex-col w-52 md-w-60'>
            <label className='mb-2'>Email:</label>
            <input required value={inputs.email || ''} onChange={handleChange} id='email' name='email' type='email' className='h-8 px-2 text-secondary bg-primary border-b-2 border-secondary focus:outline-none' />
          </div>
          <div className='flex flex-col w-52 md-w-60'>
            <label className='mb-2'>Tel:</label>
            <input required value={inputs.tel || ''} onChange={handleChange} id='tel' name='tel' type='tel' className='h-8 px-2 text-secondary bg-primary border-b-2 border-secondary focus:outline-none' />
          </div>
          <div className='flex flex-col w-52 md-w-60 mb-4'>
            <label className='mb-2'>Message:</label>
            <input required value={inputs.message || ''} onChange={handleChange} id='message' name='message' type='text' className='h-8 px-2 text-secondary bg-primary border-b-2 border-secondary focus:outline-none' />
          </div>
          <motion.button
            type='submit'
            className='w-44 py-4 bg-primary border rounded-2xl text-1xl cursor-pointer hover:border-yellow_primary
              hover:text-green_primary'
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotate: 10 }}
          >
            Send
          </motion.button>
        </form>
      </div>
    </div>
  );
};
