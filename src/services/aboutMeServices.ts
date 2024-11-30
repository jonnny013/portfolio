import axios from 'axios'
import type { AboutMe, AboutMeWithoutID } from '../types/types'

const baseURL = '/api/aboutMe'

export const getAboutMe = async () => {
  const result = await axios.get(baseURL)
  return result.data
}

export const addAboutMe = async ({
  info,
  token,
}: {
  info: AboutMeWithoutID
  token: string
}) => {
  const picture = info.picture
  const formdata = new FormData()
  formdata.append('picture', picture)
  const thingToSend = {
    ...info,
    formdata,
  }
  const result = await axios.post(baseURL, thingToSend, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: token,
    },
  })
  return result.data
}

export const updateAboutMe = async ({
  info,
  token,
}: {
  info: AboutMe
  token: string
}) => {
  if (typeof info.picture !== 'string') {
    const picture = info.picture
    const formdata = new FormData()
    formdata.append('picture', picture)
    const thingToSend = {
      ...info,
      formdata,
    }
    const result = await axios.put(`${baseURL}/${info.id}`, thingToSend, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token,
      },
    })
    return result.data
  } else {
    const result = await axios.put(`${baseURL}/${info.id}`, info, {
      headers: {
        Authorization: token,
      },
    })
    return result.data
  }
}

export const deleteAboutMe = async ({ id, token }: { id: string; token: string }) => {
  const config = {
    headers: { Authorization: token },
  }
  const result = await axios.delete(`${baseURL}/${id}`, config)
  return result.data
}
