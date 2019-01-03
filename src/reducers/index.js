import { Index } from '../constants/index'

const indexData = (state = {bannerList: []}, action) => {
    switch (action.type) {
        case Index.GET_BANNER_LIST:
            return {
                ...state,
                bannerList: action.list
            }
        default:
            return state
    }
}

export default indexData
