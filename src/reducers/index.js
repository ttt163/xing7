import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import publicInfo from './public'
import applyInfo from './apply'
import activity from './activity'
const reducers = Object.assign({
    publicInfo,
    applyInfo,
    activity,
    routing: routerReducer
})

const rootReducer = combineReducers(reducers)
export default rootReducer
