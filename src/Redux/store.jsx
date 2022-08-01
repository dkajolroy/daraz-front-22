import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'

const Reducer = combineReducers({

})



const initState = {}

const store = legacy_createStore(Reducer, initState, composeWithDevTools(applyMiddleware(thunk)))
export default store;