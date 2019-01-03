/**
 * Author：tantingting
 * Time：2018/12/13
 * Description：Description
 */

import {Detail} from '../constants'
import {axiosAjax} from '../public'

export const getActivityDetail = (sendData) => (dispatch) => {
    axiosAjax('post', '/api/club/actives/getActiveDatilByActiveId', sendData, (res) => {
        if (res.code === 1) {
            let {result} = res
            dispatch(getDetail(result))
        }
    })
}

export const getDetail = (obj) => {
    return {
        type: Detail.GET_DETAIL,
        obj
    }
}
