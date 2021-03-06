/**
 * Author：tantingting
 * Time：2018/12/13
 * Description：Description
 */

import { APPLY } from '../constants/index'
const defObj = {
    'name': '', // 真实姓名
    'phone': '', // 手机号码
    'nickName': '', // 微信昵称
    'idCard': '', // 身份证号
    'site': '' // 上车地点
}
const applyInfo = (state = {persons: []}, action) => {
    switch (action.type) {
        case APPLY.APPLY_INIT_PERSON:
            return {
                ...state,
                persons: [
                    {
                        ...JSON.parse(JSON.stringify(defObj)),
                        ...action.obj
                    }
                ]
            }
        case APPLY.APPLY_ADD_PERSON:
            let persons = state.persons
            if (!action.num) {
                persons = [
                    ...persons,
                    {
                        ...JSON.parse(JSON.stringify(defObj)),
                        ...action.obj
                    }
                ]
            } else {
                for (let i = 0; i < action.num; i++) {
                    persons.push(JSON.parse(JSON.stringify(defObj)))
                }
            }
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
