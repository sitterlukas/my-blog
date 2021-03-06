import { motion } from 'framer-motion';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { FunctionComponent } from 'react';

type ScrollToSectionProps = {
  title: string
}

export const ScrollToSection: FunctionComponent<ScrollToSectionProps> = ({ title }) => (
  <motion.div
    initial={{ y: 300, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -100, opacity: 0 }}
    transition={{ duration: 0.6 }}
    className='text-secondary text-center font-light hover:text-yellow_primary cursor-pointer'
  >
    <a href={`#${title}`}>
      <h3>
        Scroll to
        {' '}
        {title}
      </h3>
      <BsChevronDoubleDown className='m-auto mt-2' />
    </a>
  </motion.div>
);
