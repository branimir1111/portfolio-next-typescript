import Image from 'next/image';
import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import eGumePic1 from '@/public/projectImages/eGumePictures/picture1.png';
import eGumePic2 from '@/public/projectImages/eGumePictures/picture2.png';
import eGumePic3 from '@/public/projectImages/eGumePictures/picture3.png';
import eGumePic4 from '@/public/projectImages/eGumePictures/picture4.png';
import eGumePic5 from '@/public/projectImages/eGumePictures/picture5.png';
import eGumePic6 from '@/public/projectImages/eGumePictures/picture6.png';
import antEaterPic1 from '@/public/projectImages/antEaterPictures/picture1.png';
import antEaterPic2 from '@/public/projectImages/antEaterPictures/picture2.png';
import antEaterPic3 from '@/public/projectImages/antEaterPictures/picture3.png';
import antEaterPic4 from '@/public/projectImages/antEaterPictures/picture4.png';
import antEaterPic5 from '@/public/projectImages/antEaterPictures/picture5.png';
import antEaterPic6 from '@/public/projectImages/antEaterPictures/picture6.png';
import pulsarPic1 from '@/public/projectImages/pulsarPictures/picture1.png';
import pulsarPic2 from '@/public/projectImages/pulsarPictures/picture2.png';
import pulsarPic3 from '@/public/projectImages/pulsarPictures/picture3.png';
import pulsarPic4 from '@/public/projectImages/pulsarPictures/picture4.png';

const Projects = () => {
  const data = [
    {
      title: 'eGume',
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
              src={eGumePic1}
              alt="picture1"
              width={500}
              height={500}
              className="projectPic"
            />
            <Image
              src={eGumePic2}
              alt="picture2"
              width={500}
              height={500}
              className="projectPic"
            />
            <Image
              src={eGumePic3}
              alt="picture3"
              width={500}
              height={500}
              className="projectPic"
            />
            <Image
              src={eGumePic4}
              alt="picture4"
              width={500}
              height={500}
              className="projectPic"
            />
            <Image
              src={eGumePic5}
              alt="picture5"
              width={500}
              height={500}
              className="projectPic"
            />
            <Image
              src={eGumePic6}
              alt="picture6"
              width={500}
              height={500}
              className="projectPic"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'AntEater',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={antEaterPic1}
              alt="picture1"
              width={500}
              height={500}
              className="projectPic"
            />
            <Image
              src={antEaterPic2}
              alt="picture2"
              width={500}
              height={500}
              className="projectPic"
            />
            <Image
              src={antEaterPic3}
              alt="picture3"
              width={500}
              height={500}
              className="projectPic border"
            />
            <Image
              src={antEaterPic4}
              alt="picture4"
              width={500}
              height={500}
              className="projectPic border"
            />
            <Image
              src={antEaterPic5}
              alt="picture5"
              width={500}
              height={500}
              className="projectPic border"
            />
            <Image
              src={antEaterPic6}
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
              src={pulsarPic1}
              alt="picture1"
              width={500}
              height={500}
              className="projectPic"
            />
            <Image
              src={pulsarPic2}
              alt="picture2"
              width={500}
              height={500}
              className="projectPic"
            />
            <Image
              src={pulsarPic3}
              alt="picture3"
              width={500}
              height={500}
              className="projectPic"
            />
            <Image
              src={pulsarPic4}
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
