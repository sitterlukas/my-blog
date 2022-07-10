import { motion } from 'framer-motion';

export const Navigation = () => (
  <motion.header
    id='home'
    className='h-28 bg-primary flex justify-between items-center px-10 md:px-40 sticky top-0 mb-32 font-light max-w-screen-2xl 2xl:mx-auto z-10'
    key='header'
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -100, opacity: 0 }}
    transition={{ duration: 0.6 }}
  >
    <a href='#about' className='text-3xl text-secondary cursor-pointer'>HOME</a>
    <div className='hidden lg:flex gap-16 md'>
      <a href='#about' className='text-1xl text-secondary cursor-pointer hover:underline hover:underline-offset-8 hover:text-yellow_primary'>About</a>
      <a href='#projects' className='text-1xl text-secondary cursor-pointer hover:underline hover:underline-offset-8 hover:text-yellow_primary'>Projects</a>
      <a href='#stack' className='text-1xl text-secondary cursor-pointer hover:underline hover:underline-offset-8 hover:text-yellow_primary'>Stack</a>
    </div>
    <a href='#work' className='text-1xl text-neutral-100 cursor-pointer underline underline-offset-8 hover:text-yellow_primary'>Let's work together</a>
  </motion.header>
);
