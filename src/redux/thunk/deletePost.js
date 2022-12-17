import { toast } from 'react-toastify'
import { baseUrl } from '../../helpers/basrURL.js'
import { delete_post } from '../actionCreators.js/postActions.js'

const deletePost = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`${baseUrl}/posts`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    })
    const data = await res.json()
    if (data.success === true) {
      toast('Post deleted')
    }
    if (data.success === false) {
      toast.error('Post not deleted')
    }

    if (data.success === true) {
      dispatch(delete_post(data.id))
    }
  }
}

export default deletePost
