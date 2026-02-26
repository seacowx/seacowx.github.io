type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type Publication = {
  title: string
  venue: string
  year: string
  authors: string
  url?: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

// export const PROJECTS: Project[] = [
//   {
//     name: 'Motion Primitives Pro',
//     description:
//       'Advanced components and templates to craft beautiful websites.',
//     link: 'https://pro.motion-primitives.com/',
//     video:
//       'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
//     id: 'project1',
//   },
//   {
//     name: 'Motion Primitives',
//     description: 'UI kit to make beautiful, animated interfaces.',
//     link: 'https://motion-primitives.com/',
//     video:
//       'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
//     id: 'project2',
//   },
// ]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Huawei London Research Center',
    title: 'Research Intern',
    start: '2024.6',
    end: '2024.9',
    link: 'https://huaweiuk.teamtailor.com/',
    id: 'work1',
  },
  {
    company: 'Schlumberger BGC',
    title: 'AI Engineer Intern',
    start: '2020.9',
    end: '2021.5',
    link: 'https://www.slb.com/about/who-we-are/our-global-presence/slb-china',
    id: 'work2',
  },
]

export const PUBLICATIONS: Publication[] = [
  {
    title: 'When Thinking Backfires: Mechanistic Insights Into Reasoning-Induced Misalignment',
    venue: 'ICLR',
    year: '2026',
    authors: 'Hanqi Yan*, Hainiu Xu*, Siya Qi, Shu Yang, Yulan He',
    url: 'https://arxiv.org/abs/2509.00544',
    id: 'pub-1',
  },
  {
    title: 'EnigmaToM: Improve LLMs\' Theory-of-Mind Reasoning Capabilities with Neural Knowledge Base of Entity States',
    venue: 'Findings of ACL',
    year: '2025',
    authors: 'Hainiu Xu, Siya Qi, Jiazheng Li, Yuxiang Zhou, Jinhua Du, Caroline Catmur, Yulan He',
    url: 'https://arxiv.org/abs/2503.03340',
    id: 'pub-2',
  },
  {
    title: 'Modeling Subjectivity in Cognitive Appraisal with Language Models',
    venue: 'Findings of EMNLP',
    year: '2025',
    authors: 'Yuxiang Zhou*, Hainiu Xu*, Desmond C Ong, Petr Slovak, Yulan He',
    url: 'https://arxiv.org/abs/2503.11381',
    id: 'pub-3',
  },
  {
    title: 'OpenToM: A Comprehensive Benchmark for Evaluating Theory-of-Mind Reasoning Capabilities of Large Language Models',
    venue: 'ACL',
    year: '2024',
    authors: 'Hainiu Xu, Runcong Zhao, Lixing Zhu, Jinhua Du, Yulan He',
    url: 'https://arxiv.org/abs/2402.06044',
    id: 'pub-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Google Scholar',
    link: 'https://scholar.google.com/citations?user=Rbei2l4AAAAJ&hl=en',
  },
  {
    label: 'X (formerly Twitter)',
    link: 'https://x.com/seacow_x',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/hainiu-xu-116685a4/',
  },
  {
    label: 'Github',
    link: 'https://github.com/seacowx',
  },
]

export const EMAIL = 'hainiu.xu [AT] kcl.ac.uk'
