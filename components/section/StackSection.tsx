import { motion } from 'framer-motion';
import { RoughNotation } from 'react-rough-notation';

import { stackSectionData } from './stackSectionData';

export const StackSection = () => (
  <motion.div
    className='h-vhNavProjects mb-28  bg-primary'
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -100, opacity: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div id='stack' className='px-10 lg:px-40 max-w-screen-2xl 2xl:mx-auto'>
      <h1 className='mb-4 md:pt-32 mb-28 sm:mb-32 text-secondary text-6xl text-end font-light'>
        <RoughNotation show color='#8b6f00' animationDelay={1000} strokeWidth={1} type='underline'>Stack</RoughNotation>
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-customTextLeft gap-5 xl:gap-20 text-end'>
        <motion.div
          className='bg-primary hidden lg:block relative'
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <svg className='absolute' height='400' width='400'>
            <line
              x1='200'
              y1='-100'
              x2='50'
              y2='400'
              stroke='#f3f3f3'
            />
          </svg>
          <svg className='absolute' height='400' width='400'>
            <line
              x1='100'
              y1='10'
              x2='300'
              y2='300'
              stroke='#f3f3f3'
            />
          </svg>
        </motion.div>
        <motion.div
          className='bg-primary'
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className='flex flex-col gap-10 text-1xl text-secondary leading-6 mb-8 font-light'>
            {stackSectionData.map((item, index) => (
              <div key={index}>
                <h2 className='text-xl mb-2'>
                  <RoughNotation show color={item.color} padding={10} animationDelay={1000} strokeWidth={1} type='highlight'>{item.title}</RoughNotation>
                </h2>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
);
