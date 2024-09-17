import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import { aboutSectionData } from '@/utils/data/aboutSectionData';
import { testimonials } from '@/utils/data/aboutSectionData';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

const About = () => {
  return (
    <section
      id="about"
      className="w-full grid place-items-center px-3 break5:px-5"
    >
      <div className="w-full rounded-md flex flex-col antialiased dark:bg-black-100 items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          pauseOnHover={false}
        />
      </div>
      <BentoGrid className="w-full">
        {aboutSectionData.map((aboutData) => {
          const { id, title, description } = aboutData;
          return (
            <BentoGridItem
              key={id}
              id={id}
              title={title}
              description={description}
              className={`${
                id === 1 || id === 4 || id === 7 || id === 8
                  ? 'break5:col-span-2'
                  : ''
              } ${id === 1 || id === 7 ? 'break9:row-span-2' : ''}`}
            />
          );
        })}
      </BentoGrid>
    </section>
  );
};
export default About;
