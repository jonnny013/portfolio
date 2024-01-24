import axios from 'axios'
import type { AboutMe, AboutMeWithoutID } from '../types'

const baseURL = '/api/aboutMe'

export const getAboutMe = async () => {
  const result = await axios.get(baseURL)
  return result.data
}

export const addAboutMe = async (info: AboutMeWithoutID) => {
  console.log('post', info)
  const result = await axios.post(baseURL, info)
  return result.data
}

export const updateAboutMe = async (info: AboutMe) => {
  const result = await axios.put(`${baseURL}/${info.id}`, info)
  return result.data
}

export const deleteAboutMe = async (id: string) => {
  const result = await axios.delete(`${baseURL}/${id}`)
  return result.data
}