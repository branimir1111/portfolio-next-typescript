'use client';

import MainNavbar from '@/components/MainNavbar/MainNavbar';
import Hero from '@/components/Hero/Hero';

const Home = () => {
  return (
    <main className="dark:bg-black-100">
      <MainNavbar />
      <Hero />
      <div className="w-full min-h-screen">about section</div>
    </main>
  );
};

export default Home;
