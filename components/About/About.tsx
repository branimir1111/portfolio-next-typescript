import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import { aboutSectionData } from '@/utils/data/aboutSectionData';

const About = () => {
  return (
    <section
      id="about"
      className="w-full grid place-items-center px-3 break5:px-5 pt-24"
    >
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
