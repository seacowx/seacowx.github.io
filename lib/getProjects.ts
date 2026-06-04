import fs from 'fs'
import path from 'path'

export type DetectedProject = {
  id: string
  name: string
  folder: string
  link: string
}

export function getProjects(): DetectedProject[] {
  const projectsDir = path.join(process.cwd(), 'projects')

  if (!fs.existsSync(projectsDir)) return []

  const entries = fs.readdirSync(projectsDir, { withFileTypes: true })

  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry, index) => {
      const folderPath = path.join(projectsDir, entry.name)
      const files = fs.readdirSync(folderPath)
      const htmlFile = files.find((f) => f.endsWith('.html')) ?? null

      let name = entry.name
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
      let link = htmlFile ? `/projects/${entry.name}/${htmlFile}` : '#'

      const configPath = path.join(folderPath, 'project.json')
      if (fs.existsSync(configPath)) {
        try {
          const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'))
          if (typeof config.name === 'string') name = config.name
          if (typeof config.link === 'string') link = config.link
        } catch {}
      }

      return {
        id: `project-${index + 1}`,
        name,
        folder: entry.name,
        link,
      }
    })
}
