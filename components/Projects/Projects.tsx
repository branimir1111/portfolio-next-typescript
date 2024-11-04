import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { projectsSectionData } from '@/utils/data/projectsSectionData';

const Projects = () => {
  return (
    <section id="projects" className="w-full">
      <Timeline data={projectsSectionData} />
    </section>
  );
};
export default Projects;
