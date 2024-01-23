import axios from 'axios'

const baseURL = 'http://localhost:3001/aboutMe'

export const getAboutMe = async () => {
  const result = await axios.get(baseURL)
  return result.data
}

export const addAboutMe = async (info) => {
  const result = await axios.post(baseURL, info)
  return result.data
}

export const updateAboutMe = async info => {
  const result = await axios.put(`${baseURL}/${info.id}`, info)
  return result.data
}

export const deleteAboutMe = async info => {
  const result = await axios.delete(`${baseURL}/${info.id}`)
  return result.data
}