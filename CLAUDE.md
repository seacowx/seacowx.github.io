# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

Next.js 15 (App Router) + React 19 + Tailwind CSS v4 + MDX, based on the "Nim" personal site template. Statically exported (`output: 'export'` in `next.config.mjs`) and deployed to GitHub Pages — there is no Next.js server at runtime, so API routes, ISR, and `next/image` optimization cannot be used (`images.unoptimized: true`).

## Commands

- `npm run dev` — dev server
- `npm run build` — production build, outputs static site to `./out`
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`, extends `next/core-web-vitals`, `next/typescript`, `plugin:mdx/recommended`)

No test suite exists. No Prettier config is wired up (installed as a devDependency but no `.prettierrc`/`format` script).

## Branch & deploy workflow

Work happens on the `hainiu.dev` branch. The GitHub Actions deploy workflow (`.github/workflows/pages.yml`) only triggers on pushes to `main`, so changes only go live after opening a PR from `hainiu.dev` into `main` and merging it.

## Conventions

- Blog posts: `app/blog/<slug>/page.mdx` (each post is a folder).
- Site personalization data (email, social links, etc.): `app/data.ts`.
- Projects showcase: add a folder under `projects/`. `lib/getProjects.ts` reads it at build time — optionally add a `project.json` (name/link overrides) and/or an `.html` file to serve as the project's link target.
