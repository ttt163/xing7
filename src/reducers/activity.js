/**
 * Author：tantingting
 * Time：2018/12/13
 * Description：Description
 */

import { Activity } from '../constants/index'

const activity = (state = {list: []}, action) => {
    switch (action.type) {
        case Activity.ADD_DATA:
            return {
                ...state,
                ...action.obj
            }
        case Activity.GET_LIST:
            return {
                ...state,
                list: [
                    {
                        ...state.list,
                        ...action.list
                    }
                ]
            }
        default:
            return state
    }
}

export default activity
