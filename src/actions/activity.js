/**
 * Author：tantingting
 * Time：2018/12/13
 * Description：Description
 */

import {Activity} from '../constants'
import {axiosAjax} from '../public'

export const getActivityList = (sendData) => (dispatch) => {
    axiosAjax('post', '/api/club/actives/getAllActivesToMobil', sendData, (res) => {
        console.log(res)
        if (res.code === 1) {
            let {result} = res.result.result
            if (!result) {
                return
            }
            dispatch(addData({list: result}))
        }
    })
}

export const addData = (obj) => {
    return {
        type: Activity.ADD_DATA,
        obj
    }
}

export const getMoreList = (list) => {
    return {
        type: Activity.GET_LIST,
        list
    }
}
