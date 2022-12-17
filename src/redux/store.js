import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import postReducer from './reducers/postReducer'
const middleware = [thunk]
const store = createStore(
  postReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
