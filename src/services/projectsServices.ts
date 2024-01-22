import { projectData } from '../data'
import type { Project, ProjectWithoutID } from '../types'

export const getProjects = () => {
  console.log("Get request")
  return projectData
}

export const addProject = async (project: ProjectWithoutID): Promise<Project> => {
  console.log('Build a post to send:',project)
  const projectWithId = {...project,
    id: Math.floor(Math.random() * 100000).toString(),
  }
  return projectWithId
}

export const updateProject = (project: Project) => {
  if (typeof project.id === 'string') {
    console.log('use ID to make put request', project.id)
  }
  
  return 'Return confirmation of put request here'
}

export const deleteProject = (project: Project) => {
  console.log('use ID to delete project', project.id)
  return "Project deleted or error  "
}