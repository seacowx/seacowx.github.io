import { getProjects } from '@/lib/getProjects'
import { PersonalClient } from './PersonalClient'

export default function Personal() {
  const projects = getProjects()
  return <PersonalClient projects={projects} />
}
