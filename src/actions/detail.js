/**
 * Author：tantingting
 * Time：2018/12/13
 * Description：Description
 */

import {Detail} from '../constants'
import {axiosAjax} from '../public'
import {hashHistory} from 'react-router'
import {setPageTitle} from './public'

export const getActivityDetail = (sendData) => (dispatch) => {
    return new Promise((resolve) => {
        axiosAjax('post', '/api/club/actives/getActiveDatilByActiveIdForMobile', sendData, (res) => {
            if (res.code === 1) {
                let {oneActive, sameActive} = res.result
                if (!oneActive) {
                    hashHistory.goBack()
                }
                resolve(oneActive)
                dispatch(setPageTitle(oneActive.title))
                dispatch(getDetail(oneActive))
                dispatch(selectBatch(oneActive.batchs[0]))
                dispatch(setRecommend(!sameActive ? [] : sameActive))
            }
        })
    })
}

export const getDetail = (obj) => {
    return {
        type: Detail.GET_DETAIL,
        obj
    }
}
export const selectBatch = (obj) => {
    return {
        type: Detail.SELECT_BATCH,
        obj
    }
}

export const setRecommend = (list) => {
    return {
        type: Detail.ADD_RECOMMEND,
        list
    }
}
