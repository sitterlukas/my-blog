import { motion } from 'framer-motion';
import { RoughNotation } from 'react-rough-notation';
import { ScrollToSection } from './ScrollToSection';

export const HeroSection = () => (
  <main className='px-10 md:px-40 h-vhNav flex flex-col gap-32 xl:gap-48 max-w-screen-2xl 2xl:mx-auto'>
    <div className='grid grid-cols-1 lg:grid-cols-custom gap-5 xl:gap-20'>
      <motion.div
        className='bg-primary'
        key='main-text'
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 id='about' className='text-secondary font-light text-6xl mb-12 scroll-mt-60'>
          <RoughNotation show color='#004c45' padding={10} animationDelay={800} strokeWidth={1} type='circle'>About me</RoughNotation>
        </h1>
        <div className='flex flex-col gap-3 text-1xl text-secondary leading-6 mb-8 font-light'>
          <span>
            Hello my name is
            {' '}
            <RoughNotation show color='#580044' animationDelay={1200} type='highlight'>Lukas</RoughNotation>
            . I am developer based in Prague
          </span>
          <span>
            I like animations, bold designs and React. I am currently working as a QA
            {' '}
            <br />
            but I would like to transition into
            {' '}
            <RoughNotation
              show
              color='#612700'
              animationDelay={1600}
              type='highlight'
              multiline
            >
              FE development
            </RoughNotation>
          </span>
          <span>
            Currently I am learning
            {' '}
            <RoughNotation show color='#8b6f00' animationDelay={2000} type='underline'>React, </RoughNotation>
            <RoughNotation show color='#3d6400' multiline animationDelay={2000} type='circle'>Framer-motion, </RoughNotation>
            <RoughNotation show color='#6f0000' animationDelay={2000} type='box'>Next.js, </RoughNotation>
            and little bit of BE
          </span>
          <span>
            If you like my work please contact me on
            {' '}
            <RoughNotation show color='#004662' animationDelay={800} type='highlight'>LinkedIn</RoughNotation>
          </span>
        </div>
        <div className='text-secondary text-center flex gap-8 font-light'>
          <motion.a
            className='w-44 py-4 text-1xl bg-primary border rounded-2xl cursor-pointer hover:border-green_primary
              hover:text-yellow_primary'
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotate: 10 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            className='w-44 py-4 text-1xl bg-primary border  rounded-2xl cursor-pointer hover:border-yellow_primary
              hover:text-green_primary'
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotate: 10 }}
          >
            Github
          </motion.a>
        </div>
      </motion.div>
      <motion.div
        className='bg-primary hidden lg:block relative'
        key='main-text'
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <svg className='absolute' height='400' width='400'>
          <line
            x1='50'
            y1='0'
            x2='200'
            y2='500'
            stroke='#f3f3f3'
          />
        </svg>
        <svg className='absolute' height='400' width='400'>
          <line
            x1='100'
            y1='0'
            x2='400'
            y2='300'
            stroke='#f3f3f3'
          />
        </svg>
      </motion.div>
    </div>
    <ScrollToSection title='projects' />
  </main>
);