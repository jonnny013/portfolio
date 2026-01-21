import useQueryWithLoadingError from '../../hooks/useQueryWithLoadingError'
import { getProjects } from '../../services/projectsServices'
import type { Project } from '../../types/types'
import './components/project.css'
import ProjectCard from './components/ProjectCard'

const ProjectIndex = () => {
  const { data, isLoading, error, loadingScreen } = useQueryWithLoadingError(
    'projects',
    getProjects,
    false,
  )

  if (isLoading) return loadingScreen
  if (error) return null

  let projects: Project[] = []
  if (data) projects = data as Project[]

  // sort recommended first
  const ordered = projects.sort((a, b) =>
    a.recommended === b.recommended ? 0 : a.recommended ? -1 : 1,
  )

  return (
    <div className='projects-grid'>
      {ordered.map((project, index) => (
        <ProjectCard key={project.id ?? index} project={project} />
      ))}
    </div>
  )
}

export default ProjectIndex
