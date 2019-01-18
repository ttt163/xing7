/**
 * Author：tantingting
 * Time：2018/12/13
 * Description：Description
 */

import {Index} from '../constants'
import {axiosAjax} from '../public'

// 轮播图接口
export const getBannerList = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        axiosAjax('post', '/api/club/actives/getLunboImages', {}, (res) => {
            if (res.code === 1) {
                let {result} = res
                resolve(res)
                dispatch(addBannerData(result))
            }
        })
    })
}

// 活动
export const getActivitys = (sendData) => (dispatch) => {
    axiosAjax('post', '/api/club/actives/getActiveListIntroduce', sendData, (res) => {
        if (res.code === 1) {
            let {list} = res.result
            if (!list) {
                dispatch(addData({exclusiveList: [], indoorList: [], outdoorList: []}))
                return
            }
            dispatch(addData({exclusiveList: list, indoorList: list, outdoorList: list}))
        }
    })
}

export const addBannerData = (list) => {
    return {
        type: Index.GET_BANNER_LIST,
        list
    }
}

export const addData = (obj) => {
    return {
        type: Index.ADD_DATA,
        obj
    }
}
