'use client';
import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';

const Approach = () => {
  return (
    <div className="w-full grid justify-center">
      <div className="w-full max-w-7xl pt-20 px-4 md:px-8 lg:px-10 grid place-items-center">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl text-center">
          My Aproach
        </h2>
      </div>
      <div className="w-full max-w-[1280px] py-20 flex flex-col lg:flex-row items-center justify-center dark:bg-black-100 gap-4 mx-auto px-8">
        <Card
          title="Focus on Precision and User Experience"
          icon={<AceternityIcon />}
          des="I approach web development with precision and a strong focus on user experience. Every project starts with a detailed analysis of requirements to align with client needs. I prioritize clean, scalable code, ensuring that applications are robust and maintainable. Utilizing tools like react-hook-form and Redux, I optimize performance and streamline data handling. My ultimate goal is to deliver intuitive, high-quality solutions that meet both user and client expectations."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Emphasis on Efficiency and Adaptability"
          icon={<AceternityIcon />}
          des="My web development process is grounded in efficiency and adaptability. I begin by setting clear goals to streamline workflows and focus on delivering core functionality first. Using tools like my own AntEater project management system, I keep tasks organized and maintain flexibility for changes. I rely on frameworks like React and TypeScript for consistent, reliable code. My approach balances speed and quality, aiming to create scalable applications that enhance user experience."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black-100"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black-100/50 dark:bg-black/90" />
        </Card>
        <Card
          title="Collaborative and Solution-Oriented"
          icon={<AceternityIcon />}
          des="I take a collaborative and solution-oriented approach to web development. Clear communication with clients and team members ensures alignment on project goals and expectations. Leveraging technologies like ShadCN UI and Axios, I focus on efficient data handling and creating smooth frontend experiences. I use Redux and ReactQuery to manage state effectively, building responsive and user-friendly applications. My priority is to deliver reliable, performance-optimized solutions that meet client needs."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </div>
  );
};

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center absolute">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: '#E4ECFF' }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: 'darken' }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
