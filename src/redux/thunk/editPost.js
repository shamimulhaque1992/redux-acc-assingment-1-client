import { toast } from 'react-toastify'
import { baseUrl } from '../../helpers/basrURL.js'
import { edit_post } from '../actionCreators.js/postActions.js'

const editPost = (post, id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`${baseUrl}/posts`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ post: post, id: id }),
    })

    const data = await res.json()

    if (data.success === true) {
      toast('Post edited')
    }
    if (data.success === false) {
      toast('Post not edited')
    }

    if (data.success === true) {
      dispatch(edit_post(data.data))
    }
  }
}

export default editPost
