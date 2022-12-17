import { toast } from 'react-toastify'
import { baseUrl } from '../../helpers/basrURL.js'
import { create_post } from '../actionCreators.js/postActions'
const addPost = (post) => {
  return async (dispatch, getState) => {
    const res = await fetch(`${baseUrl}/posts`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(post),
    })
    const data = await res.json()
    if (data.success === true) {
      toast('New Post created')
    }
    if (data.success === false) {
      toast('Post not create')
    }

    if (data.success === true) {
      dispatch(create_post(data.post))
    }
  }
}

export default addPost
