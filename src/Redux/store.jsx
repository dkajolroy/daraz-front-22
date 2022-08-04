import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import { loginUser } from './Reducer/userReducer'
import { loginVendorReducer } from './Reducer/vendorReducer'

const Reducer = combineReducers({
    auth: loginUser,
    vendorAuth: loginVendorReducer
})

// GET Data from local storage
const authUser = localStorage.getItem('d_U_50EcEx') && JSON.parse(localStorage.getItem('d_U_50EcEx'))
const vendorData = localStorage.getItem('d_V_50EcEx') && JSON.parse(localStorage.getItem('d_V_50EcEx'))


//initial state
const initState = {
    auth: { user: authUser || 0 },
    vendorAuth: { vendor: vendorData }
}

const store = legacy_createStore(Reducer, initState, composeWithDevTools(applyMiddleware(thunk)))
export default store;