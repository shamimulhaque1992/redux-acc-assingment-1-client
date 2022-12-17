import { actionTypes } from '../actions/postActionsTypes'
const {
  POST_CREATE,
  POST_DELETE,
  POST_GET,
  POST_EDIT,
  POST_SORT,
  POST_HISTORY,
} = actionTypes
const initialState = {
  posts: [],
  history: [],
  pending: 'false',
  failure: 'false',
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_GET:
      return {
        ...state,
        posts: action.payload,
      }
    case POST_CREATE:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        pending: false,
        failure: false,
      }
    case POST_DELETE:
      const res = state.posts.filter((e) => e._id !== action.payload)
      if (res) {
        return {
          ...state,
          posts: res,
        }
      }
      return {
        ...state,
        posts: state.posts,
      }
    case POST_EDIT:
      let response = state.posts.filter((e) => e._id !== action.payload._id)
      response.push(action.payload)
      return {
        ...state,
        posts: response,
      }
    case POST_SORT:
      return {
        ...state,
        posts: action.payload,
      }
    case POST_HISTORY:
      return {
        ...state,
        history: [...state.history, action.payload],
      }
    default:
      return state
  }
}

export default postReducer
