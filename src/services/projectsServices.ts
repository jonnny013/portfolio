import type { Project, ProjectWithoutID } from '../types'
import axios from 'axios'

const baseURL = 'http://localhost:3001/projects'

export const getProjects = async () => {
  const result = await axios.get(baseURL)
  return result.data
}

export const  getSingleProject = async (id: string): Promise<Project | undefined> => {
  const result = await axios.get(`${baseURL}/${id}`)
  return result.data
}

export const addProject = async (project: ProjectWithoutID): Promise<Project> => {
  const result = await axios.post(baseURL, project)
  return result.data
}

export const updateProject = async (project: Project) => {
  const result = await axios.put(`${baseURL}/${project.id}`, project)
  return result.data
}

export const deleteProject =  async (id: string) => {
  const result = await axios.delete(`${baseURL}/${id}`)
  return result.data
}