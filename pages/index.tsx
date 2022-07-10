import type { NextPage } from 'next';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from '../components/navigation/Navigation';
import { HeroSection } from '../components/section/HeroSection';
import { ProjectsSection } from '../components/section/ProjectsSection';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Lukyno's blog</title>
      <meta name='description' content='Generated by create next app' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <AnimatePresence>
      <Navigation />
      <HeroSection />
      <ProjectsSection />
    </AnimatePresence>
  </div>
);

export default Home;