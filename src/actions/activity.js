/**
 * Author：tantingting
 * Time：2018/12/13
 * Description：Description
 */

import {Activity} from '../constants'
import {axiosAjax} from '../public'

export const getActivityList = (sendData) => (dispatch) => {
    return new Promise((resolve, reject) => {
        // axiosAjax('post', '/api/club/actives/getAllActivesToMobil', sendData, (res) => {
        axiosAjax('post', '/api/club/actives/getActiveListIntroduce', sendData, (res) => {
            if (res.code === 1) {
                resolve(res.result)
                let {list} = res.result
                if (!list) {
                    dispatch(addData({list: []}))
                    return
                }
                dispatch(addData({list: list}))
            }
        })
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
