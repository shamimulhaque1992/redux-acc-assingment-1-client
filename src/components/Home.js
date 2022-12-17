import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { post_history } from '../redux/actionCreators.js/postActions'
import deletePost from '../redux/thunk/deletePost'
import editPost from '../redux/thunk/editPost'
const Home = ({ posts }) => {
  const state = useSelector((state) => state)
  const [modalSelect, setModalSelect] = useState('')
  const [read, setRead] = useState('')
  const [deleteId, setDeleteId] = useState('')
  const [editId, setEditId] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editDescription, setEditDescription] = useState('')
  const [editAuthor, setEditAuthor] = useState('')
  const [states, setStates] = useState({})
  const dispatch = useDispatch()

  const deleteModal = (type, id) => {
    setModalSelect(type)
    setDeleteId(id)
  }
  const editModal = (type, id) => {
    setModalSelect(type)
    setEditId(id)
    const res = state.posts.find((e) => e._id === id)
    setEditTitle(res.title)
    setEditDescription(res.description)
    setEditAuthor(res.author)
  }
  const readModal = (type, id) => {
    setModalSelect(type)
    // state.posts.filter((e) => (e._id === id ? setRead(e) : null))
    const result = state.posts.filter((e) => e._id === id)
    if (result) setRead(result[0])
    dispatch(post_history(result[0]))
  }

  const postDelete = (id) => {
    dispatch(deletePost(id))
  }
  const changeValue = (e) => {
    const { name, value } = e.target

    setStates({
      ...states,
      [name]: value,
    })
  }
  const editSubmit = (e) => {
    e.preventDefault()

    dispatch(editPost(states, editId))
  }

  console.log(state?.posts);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-4 ">
        {state?.posts.map((element) => (
          <div
            key={element._id}
            class="card w-full h-72 bg-base-100 image-full "
          >
            <div class="card-body px-2">
              <h2 class="card-title">{element.title}</h2>
              <p className="text-justify">
                {element.description.length > 80
                  ? element.description.slice(0, 100) + ' ...'
                  : element.description}
              </p>
              <div class="card-actions justify-center">
                <label
                  onClick={() => deleteModal('delete-modal', element._id)}
                  for="delete-modal"
                  class="btn btn-primary"
                >
                  Delete
                </label>
                <label
                  onClick={() => editModal('edit-modal', element._id)}
                  for="edit-modal"
                  class="btn btn-primary"
                >
                  Edit
                </label>
                <label
                  onClick={() => readModal('read-modal', element._id)}
                  for="read-modal"
                  class="btn btn-primary"
                >
                  Read
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>

      <input type="checkbox" id={modalSelect} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor={modalSelect}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">
            {modalSelect === 'delete-modal'
              ? 'Would you proceed to delete ?'
              : modalSelect === 'edit-modal'
              ? 'Edit post'
              : modalSelect === 'read-modal'
              ? 'Read Details'
              : null}
          </h3>
          <div className="py-4">
            <div className="modal-action px-0">
              {modalSelect === 'delete-modal' ? (
                <>
                  <label
                    onClick={() => postDelete(deleteId)}
                    htmlFor="nice"
                    className="btn"
                    value=""
                  >
                    Yes
                  </label>
                  <label htmlFor={modalSelect} className="btn" value="">
                    No
                  </label>
                </>
              ) : modalSelect === 'edit-modal' ? (
                <form onSubmit={editSubmit} className="w-full">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      paddingLeft: '0px',
                    }}
                  >
                    <label style={{ paddingLeft: '0px', fontWeight: '500' }}>
                      Post Title
                    </label>
                    <input
                      onChange={changeValue}
                      name="title"
                      type="text"
                      defaultValue={editTitle}
                      placeholder={editTitle}
                      style={{ border: '1px solid black', borderRadius: '5px' }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      paddingLeft: '0px',
                    }}
                  >
                    <label style={{ paddingLeft: '0px', fontWeight: '500' }}>
                      Post Description
                    </label>
                    <textarea
                      name="description"
                      onChange={changeValue}
                      defaultValue={editDescription}
                      placeholder={editDescription}
                      style={{ border: '1px solid black', borderRadius: '5px' }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      paddingLeft: '0px',
                    }}
                  >
                    <label style={{ paddingLeft: '0px', fontWeight: '500' }}>
                      Author of post
                    </label>
                    <input
                      name="author"
                      onChange={changeValue}
                      type="text"
                      defaultValue={editAuthor}
                      placeholder={editAuthor}
                      style={{ border: '1px solid black', borderRadius: '5px' }}
                    />
                  </div>

                  <div className="modal-action">
                    <label htmlFor="nice" className="btn" value="">
                      <button type="submit">edit Post</button>
                    </label>
                  </div>
                </form>
              ) : (
                <div className="w-full px-0">
                  <h1 className="px-0">
                    <span className="px-0 font-bold">Title:</span> {read?.title}
                  </h1>
                  <p className="px-0">
                    <span className="px-0 font-bold">Description: </span>
                    {read?.description}
                  </p>
                  <p className="px-0">
                    <span className="px-0 font-bold">Author: </span>
                    {read?.author}
                  </p>
                  <p className="px-0">
                    <span className="px-0 font-bold">Tags: </span>
                    {read?.tags}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
