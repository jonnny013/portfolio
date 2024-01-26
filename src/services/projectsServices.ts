import type { Project, ProjectWithoutID } from '../types'
import axios from 'axios'

const baseURL = '/api/projects'

export const getProjects = async () => {
  const result = await axios.get(baseURL)
  return result.data
}

export const  getSingleProject = async (id: string): Promise<Project | undefined> => {
  const result = await axios.get(`${baseURL}/${id}`)
  return result.data
}

export const addProject = async ({
  project,
  token,
}: {
  project: ProjectWithoutID
  token: string
}): Promise<Project> => {
  const config = {
    headers: { Authorization: token },
  }
  const result = await axios.post(baseURL, project, config)
  return result.data
}

export const updateProject = async ({
  project,
  token,
}: {
  project: Project
  token: string
}) => {
  const config = {
    headers: { Authorization: token },
  }
  const result = await axios.put(`${baseURL}/${project.id}`, project, config)
  return result.data
}

export const deleteProject = async ({ id, token }: { id: string, token: string }) => {
  const config = {
    headers: { Authorization: token },
  }
  const result = await axios.delete(`${baseURL}/${id}`, config)
  return result.data
}