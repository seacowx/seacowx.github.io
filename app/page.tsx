'use client'
import { AnimatePresence, motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { useState } from 'react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  // PROJECTS,
  WORK_EXPERIENCE,
  PUBLICATIONS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'
import { Header } from './header'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -12, filter: 'blur(6px)' },
}

const TRANSITION_SECTION = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1] as const,
}

type SectionId = 'home' | 'education' | 'work' | 'publications' | 'contact'

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex min-h-10 shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-3 py-1.5 text-sm text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  const [activeSection, setActiveSection] = useState<SectionId>('home')

  const renderActiveSection = () => {
    if (activeSection === 'home') {
      return (
        <div className="flex-1">
          <p className="text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-400">
            你好! Welcome to my homepage 👋
          </p>
          <br></br>
          <p className="text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-400">
            I am currently a third-year PhD student at King's College London,
            affiliated with KCL NLP. I'm fortunate to be supervised by Professor
            Yulan He, Professor Caroline Catmur, and Dr. Jinhua Du. My research
            interest is the intersection of Large Language Models and Cognitive
            Science. My study is funded by EPSRC.
          </p>
          <br></br>
          <p className="text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-400">
            Before KCL, I was a Master's student at the University of
            Pennsylvania, where I was supervised by Professor Chris
            Callison-Burch. During my time at Penn, I worked closely with Li
            "Harry" Zhang, who is currently an assistant professor at Drexel
            University. Prior to that, I completed my undergraduate degree in
            Statistical Data Science at University of California, Davis, where I
            worked on Functional Principal Component Analysis and Curve
            Registration with Professor Jane-Ling Wang.
          </p>
        </div>
      )
    }

    if (activeSection === 'education') {
      return (
        <>
          <h3 className="mb-5 text-lg font-medium">Education</h3>
          <div className="flex flex-col space-y-2">
            {[
              {
                id: 'edu-1',
                school: "King's College London",
                major: 'Ph.D. in Computer Science',
                gpa: 'N/A',
                location: 'London, UK',
                time: '2023-Present',
              },
              {
                id: 'edu-2',
                school: 'University of Pennsylvania',
                major: 'MSE in Computer Science',
                gpa: '4.00/4.00',
                location: 'Philadelphia, PA',
                time: '2021-2023',
              },
              {
                id: 'edu-3',
                school: 'University of California, Davis',
                major: 'B.S. in Statistical Data Science',
                gpa: '3.84/4.0',
                location: 'Davis, CA',
                time: '2016-2020',
              },
            ].map((edu) => (
              <div
                className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] transition-all duration-300 hover:-translate-y-0.5 dark:bg-zinc-600/30"
                key={edu.id}
              >
                <Spotlight
                  className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                  size={64}
                />
                <div className="relative h-full w-full rounded-[15px] bg-white p-3 sm:p-4 dark:bg-zinc-950">
                  <div className="relative flex w-full flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="font-normal dark:text-zinc-100">
                        {edu.school}
                      </h4>
                      <p className="text-zinc-500 dark:text-zinc-400">
                        {edu.major}
                      </p>
                      <p className="text-zinc-500 dark:text-zinc-400">
                        {edu.gpa} · {edu.location}
                      </p>
                    </div>
                    <p className="text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-400">
                      {edu.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )
    }

    if (activeSection === 'work') {
      return (
        <>
          <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
          <div className="flex flex-col space-y-2">
            {WORK_EXPERIENCE.map((job) => (
              <a
                className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] transition-all duration-300 hover:-translate-y-0.5 dark:bg-zinc-600/30"
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                key={job.id}
              >
                <Spotlight
                  className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                  size={64}
                />
                <div className="relative h-full w-full rounded-[15px] bg-white p-3 sm:p-4 dark:bg-zinc-950">
                  <div className="relative flex w-full flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="font-normal dark:text-zinc-100">
                        {job.title}
                      </h4>
                      <p className="text-zinc-500 dark:text-zinc-400">
                        {job.company}
                      </p>
                    </div>
                    <p className="text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-400">
                      {job.start} - {job.end}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </>
      )
    }

    if (activeSection === 'publications') {
      return (
        <>
          <h3 className="mb-3 text-lg font-medium">Selected Publications</h3>
          <div className="flex flex-col space-y-0">
            <AnimatedBackground
              enableHover
              className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.2,
              }}
            >
              {PUBLICATIONS.map((publication) => (
                <a
                  key={publication.id}
                  href={
                    publication.url && publication.url.trim().length > 0
                      ? publication.url
                      : `https://scholar.google.com/scholar?q=${encodeURIComponent(
                          publication.title
                        )}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-3 block cursor-pointer rounded-xl px-3 py-3 transition-all duration-300 hover:-translate-y-0.5"
                  data-id={publication.id}
                >
                  <div className="flex flex-col space-y-1">
                    <h4 className="font-normal dark:text-zinc-100">
                      {publication.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {publication.authors}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {publication.venue} · {publication.year}
                    </p>
                  </div>
                </a>
              ))}
            </AnimatedBackground>
          </div>
        </>
      )
    }

    return (
      <>
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </>
    )
  }

  return (
    <motion.main
      id="top"
      className="space-y-10 sm:space-y-14"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <div className="pt-2 pb-4">
        <Header
          activeSection={activeSection}
          onSectionChange={(section) => setActiveSection(section as SectionId)}
        />
      </div>

      <div className="min-h-[22rem] sm:min-h-[26rem]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.section
            key={activeSection}
            id={activeSection}
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="will-change-transform"
          >
            {renderActiveSection()}
          </motion.section>
        </AnimatePresence>
      </div>
    </motion.main>
  )
}
