import * as tokenService from './tokenService'
import { addPhoto as addProfilePhoto } from './profileService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/posts`

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const create = async (form) => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${tokenService.getToken()}`},
      body: JSON.stringify(form),
    })
    return res.json()
    }
  catch (error) {
    throw error
  }
}

  async function addPostPhoto(photoData, postId) {
    console.log(photoData);
    const res = await fetch(`${BASE_URL}/${postId}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoData
    })
    return await res.json()
  }

  const update = async (postData, id) => {
    try {
      const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${tokenService.getToken()}`},
        body: JSON.stringify(postData)
      })
      return res.json()
    } catch (error) {
      console.log(error)
    }
  }

  const deletePost = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${tokenService.getToken()}`
        }
      })
      return res.json()
    } catch (error) {
      console.log(error)
    }
  }

export {
  index,
  show,
  create,
  addPostPhoto,
  update,
  deletePost as delete
}
