import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from '../ui/hero-highlight';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';

const About = () => {
  return (
    <section
      id="about"
      className="w-full grid place-items-center pt-24 px-3 break5:px-5"
    >
      <BentoGrid className="w-full">
        <BentoGridItem
          title="1"
          className="break5:col-span-2 break9:row-span-2"
        />
        <BentoGridItem title="2" className="" />
        <BentoGridItem title="3" className="" />
        <BentoGridItem title="4" className="break5:col-span-2" />
        <BentoGridItem title="5" className="" />
        <BentoGridItem title="6" className="" />
        <BentoGridItem
          title="7"
          className="break5:col-span-2 break9:row-span-2"
        />
        <BentoGridItem title="8" className="break5:col-span-2" />
      </BentoGrid>
    </section>
  );
};
export default About;
