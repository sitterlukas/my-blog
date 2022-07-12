import type { NextPage } from 'next';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import { Navigation } from '../components/navigation/Navigation';
import { HeroSection } from '../components/section/HeroSection';
import { ProjectsSection } from '../components/section/ProjectsSection';
import { StackSection } from '../components/section/StackSection';
import { Footer } from '../components/footer/Footer';
import { ContactModal } from '../components/modal/ContactModal';

const Home: NextPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModalOpen = (): void => {
    setModalIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalIsOpen]);

  useEffect(() => {
    const close = (e: { keyCode: number; }) => {
      if (e.keyCode === 27 && modalIsOpen) {
        handleModalOpen();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [modalIsOpen]);

  return (
    <div>
      <Head>
        <title>Lukyno's blog</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AnimatePresence>
        <Navigation handleModalOpen={handleModalOpen} />
        <ContactModal isOpen={modalIsOpen} handleModalOpen={handleModalOpen} />
        <HeroSection />
        <ProjectsSection />
        <StackSection />
        <Footer />
      </AnimatePresence>
    </div>
  );
};

export default Home;
