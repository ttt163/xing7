/**
 * Author：tantingting
 * Time：2018/12/13
 * Description：Description
 */

import {APPLY} from '../constants'

export const addPerson = (obj) => {
    return {
        type: APPLY.APPLY_ADD_PERSON,
        obj
    }
}

export const delPerson = (index) => {
    return {
        type: APPLY.APPLY_DEL_PERSON,
        index
    }
}

export const editPerson = (obj, index) => {
    return {
        type: APPLY.APPLY_EDIT_PERSON,
        obj,
        index
    }
}
