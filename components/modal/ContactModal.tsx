import { MouseEventHandler } from 'react';
import { motion } from 'framer-motion';
import { RoughNotation } from 'react-rough-notation';

export const ContactModal = ({ isOpen, handleModalOpen }: {isOpen: boolean, handleModalOpen: MouseEventHandler<HTMLDivElement>}) => (
  <>
    <div onClick={handleModalOpen} className={isOpen ? 'fixed top-0 w-full h-full bg-secondary/10 overflow-auto z-30 ' : 'hidden'} />
    <div
      className={isOpen ? 'fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-auto md:w-1/2 max-w-3xl h-auto py-12 bg-primary rounded-2xl font-light z-40' : 'hidden'}
    >
      <h1 className='mb-12 text-center px-12 text-6xl text-secondary font-light'>
        <RoughNotation color='#8b6f00' show={isOpen} strokeWidth={1} type='underline'>Contact me</RoughNotation>
      </h1>
      <form className='flex flex-col gap-6 items-start px-4 px-8 md:px-20 text-left text-secondary'>
        <div className='flex flex-col w-40 md-w-60'>
          <label className='mb-2'>Email:</label>
          <input id='email' name='email' type='text' className='h-8 px-2 text-secondary bg-primary border-b-2 border-secondary focus:outline-none' />
        </div>
        <div className='flex flex-col w-40 md-w-60'>
          <label className='mb-2'>Tel:</label>
          <input id='tel' name='tel' type='text' className='h-8 px-2 text-secondary bg-primary border-b-2 border-secondary focus:outline-none' />
        </div>
        <div className='flex flex-col w-40 md-w-60 mb-4'>
          <label className='mb-2'>Message:</label>
          <input id='message' name='message' type='text' className='h-8 px-2 text-secondary bg-primary border-b-2 border-secondary focus:outline-none' />
        </div>
        <button
          type='submit'
          className='w-44 py-4 bg-primary border rounded-2xl text-1xl cursor-pointer hover:border-yellow_primary
              hover:text-green_primary'
        >
          Send
        </button>
      </form>
    </div>
  </>
);
