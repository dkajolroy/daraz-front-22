import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import { loginUser } from './Reducer/userReducer'

const Reducer = combineReducers({
    auth: loginUser
})

// GET Data from local storage
const authUser = localStorage.getItem('d_U_50EcEx') && JSON.parse(localStorage.getItem('d_U_50EcEx'))


//initial state
const initState = {
    auth: { user: authUser || 0 }
}

const store = legacy_createStore(Reducer, initState, composeWithDevTools(applyMiddleware(thunk)))
export default store;