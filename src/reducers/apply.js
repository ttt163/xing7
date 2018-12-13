/**
 * Author：tantingting
 * Time：2018/12/13
 * Description：Description
 */

import { APPLY } from '../constants/index'

const applyInfo = (state = {persons: []}, action) => {
    switch (action.type) {
        case APPLY.APPLY_ADD_PERSON:
            let defObj = {
                'name': '', // 真实姓名
                'phone': '', // 手机号码
                'nickName': '', // 微信昵称
                'idCard': '', // 身份证号
                'site': '' // 上车地点
            }
            let persons = [
                ...state.persons,
                {
                    ...defObj,
                    ...action.obj
                }
            ]
            return {
                ...state,
                persons: persons
            }
        case APPLY.APPLY_DEL_PERSON:
            return {
                ...state,
                persons: [
                    ...state.persons.slice(0, action.index),
                    ...state.persons.slice(action.index + 1)
                ]
            }
        case APPLY.APPLY_EDIT_PERSON:
            let thisObj = state.persons[action.index]
            thisObj = {
                ...thisObj,
                ...action.obj
            }
            return {
                ...state,
                persons: [
                    ...state.persons.slice(0, action.index),
                    thisObj,
                    ...state.persons.slice(action.index + 1)
                ]
            }
        default:
            return state
    }
}

export default applyInfo
