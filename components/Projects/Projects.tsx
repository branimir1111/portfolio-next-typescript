import Image from 'next/image';
import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import early2023Pic1 from '@/public/projectImages/early2023/picture1.png';
import early2023Pic2 from '@/public/projectImages/early2023/picture2.png';
import early2023Pic3 from '@/public/projectImages/early2023/picture3.png';
import early2023Pic4 from '@/public/projectImages/early2023/picture4.png';
import early2024Pic1 from '@/public/projectImages/early2024/picture1.png';
import early2024Pic2 from '@/public/projectImages/early2024/picture2.png';
import early2024Pic3 from '@/public/projectImages/early2024/picture3.png';
import early2024Pic4 from '@/public/projectImages/early2024/picture4.png';
import early2024Pic5 from '@/public/projectImages/early2024/picture5.png';
import early2024Pic6 from '@/public/projectImages/early2024/picture6.png';

const Projects = () => {
  const data = [
    {
      title: 'AntEater',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={early2024Pic1}
              alt="picture1"
              width={500}
              height={500}
              className="projectPic"
            />
            <Image
              src={early2024Pic2}
              alt="picture2"
              width={500}
              height={500}
              className="projectPic"
            />
            <Image
              src={early2024Pic3}
              alt="picture3"
              width={500}
              height={500}
              className="projectPic border"
            />
            <Image
              src={early2024Pic4}
              alt="picture4"
              width={500}
              height={500}
              className="projectPic border"
            />
            <Image
              src={early2024Pic5}
              alt="picture5"
              width={500}
              height={500}
              className="projectPic border"
            />
            <Image
              src={early2024Pic6}
              alt="picture6"
              width={500}
              height={500}
              className="projectPic border"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Pulsar',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={early2023Pic1}
              alt="picture1"
              width={500}
              height={500}
              className="projectPic"
            />
            <Image
              src={early2023Pic2}
              alt="picture2"
              width={500}
              height={500}
              className="projectPic"
            />
            <Image
              src={early2023Pic3}
              alt="picture3"
              width={500}
              height={500}
              className="projectPic"
            />
            <Image
              src={early2023Pic4}
              alt="picture4"
              width={500}
              height={500}
              className="projectPic"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <section id="projects" className="w-full">
      <Timeline data={data} />
    </section>
  );
};
export default Projects;
