import { Detail } from '../constants/index'

const detailData = (state = {data: null}, action) => {
    switch (action.type) {
        case Detail.GET_DETAIL:
            return {
                ...state,
                data: action.obj
            }
        default:
            return state
    }
}

export default detailData
