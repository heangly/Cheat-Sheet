import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userRegisterReducer } from '../reducers/userReducers'

const reducers = combineReducers({
  userRegister: userRegisterReducer
})

const middleWare = [thunk]

// const userInfoFromStorage = localStorage.getItem('userInfo')
//   ? JSON.parse(localStorage.getItem('userInfo'))
//   : null

const initialState = {}

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
)

export default store
