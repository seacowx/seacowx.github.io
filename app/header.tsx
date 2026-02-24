'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import portrait from '@/assets/seacow.JPG'
import { SOCIAL_LINKS } from './data'

type HeaderProps = {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function Header({ activeSection, onSectionChange }: HeaderProps) {
  const researchLines = [
    'Large Language Model x Theory of Mind',
    'Large Language Model x Cognitive Behavioral Therapy',
    'Large Language Model x Cognitive Appraisal',
  ]
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentLine = researchLines[lineIndex]
    let timeoutId: ReturnType<typeof setTimeout>

    if (charIndex < currentLine.length) {
      timeoutId = setTimeout(() => {
        setCharIndex((value) => value + 1)
      }, 40)
    } else {
      timeoutId = setTimeout(() => {
        setCharIndex(0)
        setLineIndex((value) => (value + 1) % researchLines.length)
      }, 1500)
    }

    return () => clearTimeout(timeoutId)
  }, [charIndex, lineIndex, researchLines])

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Education', id: 'education' },
    { label: 'Work', id: 'work' },
    { label: 'Publications', id: 'publications' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <header className="mb-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <Image
          src={portrait}
          alt="Portrait of Hainiu Xu"
          priority
          className="h-36 w-36 rounded-full object-cover sm:h-48 sm:w-48"
        />
        <Link
          href="/"
          className="text-2xl font-bold text-black sm:text-4xl dark:text-white"
        >
          Hainiu Xu (许海牛)
        </Link>
        <p className="min-h-6 px-2 text-sm text-zinc-600 sm:text-base dark:text-zinc-500">
          {researchLines[lineIndex].slice(0, charIndex)}
          <span className="ml-0.5 inline-block w-[1px] animate-pulse bg-zinc-400 align-middle dark:bg-zinc-500">
            &nbsp;
          </span>
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.link}
              className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
            >
              {link.label}
            </a>
          ))}
        </div>
        <nav
          className="mt-2 grid w-full max-w-md grid-cols-2 gap-1 rounded-[1.1rem] bg-zinc-100/80 p-1 ring-1 ring-zinc-200/60 backdrop-blur sm:flex sm:w-auto sm:max-w-none sm:flex-wrap sm:items-center dark:bg-zinc-900/80 dark:ring-zinc-800/70"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive = item.id === activeSection
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => onSectionChange(item.id)}
                className="relative inline-flex min-h-11 items-center justify-center rounded-[0.9rem] px-4 py-2 text-sm font-medium text-zinc-500 transition-colors duration-300 ease-out hover:text-zinc-900 sm:min-h-10 dark:text-zinc-400 dark:hover:text-zinc-100"
                aria-current={isActive ? 'page' : undefined}
              >
                {isActive ? (
                  <motion.span
                    layoutId="active-nav-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-[0.9rem] bg-white shadow-[0_6px_16px_rgba(0,0,0,0.12)] dark:bg-zinc-950"
                  ></motion.span>
                ) : null}
                <span className="relative z-10">{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
