import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from '../ui/hero-highlight';
import profileImage from '@/public/portfolioPicture.jpg';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home">
      <HeroHighlight containerClassName="dark:bg-black-100">
        {/* <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        > */}
        <h1 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center mb-8 sm:items-end">
            <Image
              src={profileImage}
              alt="profile image"
              className="w-12 h-12 rounded-md"
            />
            <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              branimir <span className="text-purple">djordjevic</span>
            </p>
          </div>
          Developing Ideas Into Harmonious{' '}
          <Highlight className="text-black dark:text-white text-nowrap px-3">
            User Interface
          </Highlight>
          <p className="mt-8 text-center md:tracking-wider text-sm md:text-lg lg:text-2xl">
            Let&apos;s create the future together.
          </p>
          <a
            href="/BranimirDjordjevicCV.pdf"
            target="__blank"
            className="mb-6 md:mb-0 text-sm md:text-lg lg:text-xl text-violet-400 hover:text-violet-300 hover:font-bold transition-all duration-200"
          >
            Download CV
          </a>
        </h1>
        {/* </motion.h1> */}
      </HeroHighlight>
    </section>
  );
};
export default Hero;
