import { motion } from 'framer-motion';
import { FunctionComponent, MouseEventHandler } from 'react';

import { navigationData } from './navigationData';

type NavigationProps = {
  handleModalOpen: MouseEventHandler<HTMLAnchorElement>
}

export const Navigation: FunctionComponent<NavigationProps> = ({ handleModalOpen }) => (
  <motion.header
    id='home'
    className='flex sticky justify-between items-center h-28 bg-primary px-10 lg:px-40 top-0 mb-12 md:mb-32  max-w-screen-2xl 2xl:mx-auto font-light z-10'
    key='header'
    initial={{ y: -300, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -100, opacity: 0 }}
    transition={{ duration: 0.8 }}
  >
    <a href='#about' className='text-3xl text-secondary cursor-pointer'>HOME</a>
    <div className='hidden lg:flex gap-16 md'>
      {navigationData.map((link, index) => <a key={index} href={link.href} className='text-1xl text-secondary cursor-pointer hover:underline hover:underline-offset-8 hover:text-yellow_primary'>{link.title}</a>)}
    </div>
    <a onClick={handleModalOpen} href='#work' className='text-1xl text-secondary cursor-pointer underline underline-offset-8 hover:text-yellow_primary'>Let's work together</a>
  </motion.header>
);
