import {compose, createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const middleware = [thunk]
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store =  createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))
//let store = createStore(rootReducer,applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>
export default store