import { Swiper, SwiperSlide } from 'swiper/react';
import { RoughNotation } from 'react-rough-notation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import { ScrollToSection } from './ScrollToSection';

export const ProjectsSection = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  });
  return (

    <motion.div
      className='bg-primary mb-12 h-vhNavProjects'
      key='main-text'
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div id='projects' className='px-10 md:px-40 max-w-screen-2xl 2xl:mx-auto'>
        <h1 className='text-secondary text-6xl mb-4 text-center pt-32 mb-36 sm:mb-40 font-light'>
          <RoughNotation show color='#004c45' padding={10} animationDelay={800} strokeWidth={1} type='underline'>Projects</RoughNotation>
        </h1>
        <Swiper
          color='secondary'
          slidesPerView={width > 700 ? 3 : 1}
          spaceBetween={30}
          loop
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Pagination]}
          className='mySwiper mb-8 h-44'
        >
          <SwiperSlide className='text-secondary font-light'>
            <div className='flex flex-col h-full text-center'>
              <h1 className='mb-4 text-3xl'>Chat</h1>
              <span className='text-sm leading-6 mb-12'>App that is using next.js and socket.io. App that is using next.js and socket.io. App that is using next.js and socket.io.</span>
              <motion.a
                className='w-44 py-4 mx-auto text-1xl bg-primary border rounded-2xl cursor-pointer hover:border-green_primary
              hover:text-yellow_primary'
                whileHover={{ scale: 1.1 }}
                whileTap={{ rotate: 10 }}
              >
                Visit
              </motion.a>
            </div>
          </SwiperSlide>
          <SwiperSlide className='text-secondary font-light'>
            <div className='flex flex-col min-h-32 text-center'>
              <h1 className='mb-4 text-3xl'>Chat</h1>
              <span className='text-sm leading-6 mb-12'>App that is using next.js and socket.io. App that is using next.js and socket.io. App that is using next.js and socket.io.</span>
              <motion.a
                className='w-44 py-4 text-1xl mx-auto bg-primary border rounded-2xl cursor-pointer hover:border-green_primary
              hover:text-yellow_primary'
                whileHover={{ scale: 1.1 }}
                whileTap={{ rotate: 10 }}
              >
                Visit
              </motion.a>
            </div>
          </SwiperSlide>
          <SwiperSlide className='text-secondary font-light'>
            <div className='flex flex-col text-center'>
              <h1 className='mb-4 text-3xl'>Chat</h1>
              <span className='text-sm leading-6 mb-12'>App that is using next.js and socket.io. App that is using next.js and socket.io. App that is using next.js and socket.io.</span>
              <motion.a
                className='w-44 py-4 mx-auto bg-primary border rounded-2xl cursor-pointer hover:border-green_primary
              hover:text-yellow_primary'
                whileHover={{ scale: 1.1 }}
                whileTap={{ rotate: 10 }}
              >
                Visit
              </motion.a>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='hidden md:block'>
          <ScrollToSection title='stack' />
        </div>
      </div>
    </motion.div>
  );
};
