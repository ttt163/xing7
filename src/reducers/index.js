import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import publicInfo from './public'
import applyInfo from './apply'
const reducers = Object.assign({
    publicInfo,
    applyInfo,
    routing: routerReducer
})

const rootReducer = combineReducers(reducers)
export default rootReducer
