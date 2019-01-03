import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import publicInfo from './public'
import applyInfo from './apply'
import activity from './activity'
import indexData from './index'
import detailData from './detail'
const reducers = Object.assign({
    publicInfo,
    applyInfo,
    activity,
    indexData,
    detailData,
    routing: routerReducer
})

const rootReducer = combineReducers(reducers)
export default rootReducer
