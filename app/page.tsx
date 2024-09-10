'use client';

import MainNavbar from '@/components/MainNavbar/MainNavbar';
import Hero from '@/components/Hero/Hero';

const Home = () => {
  return (
    <main className="dark:bg-black-100">
      <MainNavbar />
      <Hero />
    </main>
  );
};

export default Home;
