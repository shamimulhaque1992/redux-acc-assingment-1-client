import { actionTypes } from '../actions/postActionsTypes'

const {
  POST_CREATE,
  POST_DELETE,
  POST_GET,
  POST_EDIT,
  POST_SORT,
  POST_HISTORY,
} = actionTypes

export const get_post = (post) => {
  return {
    type: POST_GET,
    payload: post,
  }
}
export const create_post = (post) => {
  return {
    type: POST_CREATE,
    payload: post,
  }
}

export const delete_post = (postId) => {
  return {
    type: POST_DELETE,
    payload: postId,
  }
}

export const edit_post = (post) => {
  return {
    type: POST_EDIT,
    payload: post,
  }
}

export const sort_post = (post) => {
  return {
    type: POST_SORT,
    payload: post,
  }
}

export const post_history = (post) => {
  return {
    type: POST_HISTORY,
    payload: post,
  }
}
