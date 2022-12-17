import { baseUrl } from '../../helpers/basrURL.js'
import { get_post } from '../actionCreators.js/postActions.js'

const getPost = () => {
  return async (dispatch, getState) => {
    const res = await fetch(`${baseUrl}/posts`)
    const data = await res.json()
    if (data.success === true) {
      dispatch(get_post(data.posts))
    }
  }
}

export default getPost
