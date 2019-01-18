import { Index } from '../constants/index'

const indexData = (state = {bannerList: [], exclusiveList: [], indoorList: [], outdoorList: []}, action) => {
    switch (action.type) {
        case Index.GET_BANNER_LIST:
            return {
                ...state,
                bannerList: action.list
            }
        case Index.ADD_DATA:
            return {
                ...state,
                ...action.obj
            }
        default:
            return state
    }
}

export default indexData
