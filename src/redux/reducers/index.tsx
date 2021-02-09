import {combineReducers} from 'redux'
import api from './api'
import films from './films'
import favorites from './favorites'


const appReducer = combineReducers({
  api,
  films,
  favorites
})

const rootReducer = (state:any, action:any) => {
  if (action.type === 'USER_LOGOUT') {
    state = {}
  }

  return appReducer(state, action)
}

export default rootReducer