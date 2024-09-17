type AboutSectionDataProps = {
  readonly id: number;
  title: string;
  description: string;
};

export const aboutSectionData: AboutSectionDataProps[] = [
  {
    id: 1,
    title:
      'Building strong client relationships through open communication is my priority',
    description:
      'Prioritizing client needs by emphasizing clarity and trust in every interaction',
  },
  {
    id: 2,
    title: 'Frontend',
    description: '',
  },
  {
    id: 3,
    title: 'Backend',
    description: '',
  },
  {
    id: 4,
    title: "Let's connect no matter where you are in the world",
    description: '',
  },
  {
    id: 5,
    title:
      'Continuously seeking to integrate the latest technological advancements into practical solutions',
    description: '',
  },
  {
    id: 6,
    title: 'Currently working on a project management system',
    description: 'The inside update',
  },
  {
    id: 7,
    title:
      'Innovating solutions to drive success and exceed client expectations',
    description:
      'Leveraging cutting-edge technologies to provide customized solutions that help clients achieve their goals and surpass industry benchmarks',
  },
  {
    id: 8,
    title: 'How about we start project as a team?',
    description: '',
  },
];

type DevToolsProps = {
  readonly id: number;
  text: string;
};

export const frontTools: DevToolsProps[] = [
  { id: 1, text: 'JavaScript' },
  { id: 2, text: 'TypeScript' },
  { id: 3, text: 'React' },
];
export const backTools: DevToolsProps[] = [
  { id: 1, text: 'NodeJS' },
  { id: 2, text: 'ExpressJS' },
  { id: 3, text: 'MongoDB' },
];

type TestimonialsProps = {
  readonly id: number;
  quote: string;
  name: string;
  title: string;
};

export const testimonials: TestimonialsProps[] = [
  {
    id: 1,
    quote: 'Innovation distinguishes between a leader and a follower.',
    name: 'Steve Jobs',
    title: 'Apple',
  },
  {
    id: 2,
    quote: 'The biggest risk is not taking any risk.',
    name: 'Mark Zuckerberg',
    title: 'Facebook/Meta',
  },
  {
    id: 3,
    quote:
      "It's fine to celebrate success, but it is more important to heed the lessons of failure.",
    name: 'Bill Gates',
    title: 'Microsoft',
  },
  {
    id: 4,
    quote:
      'I think it is possible for ordinary people to choose to be extraordinary.',
    name: 'Elon Musk',
    title: 'Tesla, SpaceX, X',
  },
  {
    id: 5,
    quote:
      'If you do build a great experience, customers tell each other about that. Word of mouth is very powerful.',
    name: 'Jeff Bezos',
    title: 'Amazon',
  },
];
