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
                if (!result) {
                    dispatch(addBannerData(result))
                    return
                }
                dispatch(addBannerData(result))
            }
        })
    })
}

export const addBannerData = (list) => {
    return {
        type: Index.GET_BANNER_LIST,
        list
    }
}
