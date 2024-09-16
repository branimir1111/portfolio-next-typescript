import { BentoGrid, BentoGridItem } from '../ui/bento-grid';

const About = () => {
  return (
    <section
      id="about"
      className="w-full grid place-items-center px-3 break5:px-5"
    >
      <div className="w-full pt-24 pb-10 dark:bg-black-100 bg-white  dark:bg-dot-white/[0.2] bg-dot-black-100/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
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
      </div>
    </section>
  );
};
export default About;
