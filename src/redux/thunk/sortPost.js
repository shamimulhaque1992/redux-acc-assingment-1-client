import { baseUrl } from '../../helpers/basrURL.js'
import { sort_post } from '../actionCreators.js/postActions.js'
const sortPost = (type) => {
  return async (dispatch, getState) => {
    const res = await fetch(`${baseUrl}/sort`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ type: type }),
    })
    const data = await res.json()

    if (data.success === true) {
      dispatch(sort_post(data.posts))
    }
  }
}

export default sortPost
