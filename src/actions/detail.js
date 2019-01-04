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
        axiosAjax('post', '/api/club/actives/getActiveDatilByActiveId', sendData, (res) => {
            if (res.code === 1) {
                let {result} = res
                if (!result) {
                    hashHistory.goBack()
                }
                resolve(result)
                dispatch(setPageTitle(result.title))
                dispatch(getDetail(result))
                dispatch(selectBatch(result.batchs[0]))
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
