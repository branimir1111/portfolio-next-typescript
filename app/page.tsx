'use client';

import MainNavbar from '@/components/MainNavbar/MainNavbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Approach from '@/components/Approach/Approach';
import Contact from '@/components/Contact/Contact';

const Home = () => {
  return (
    <main>
      <MainNavbar />
      <div className="relative dark:bg-black-100">
        <Hero />
        <About />
        <Projects />
        <Approach />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
