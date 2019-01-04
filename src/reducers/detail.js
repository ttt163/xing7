import {Detail} from '../constants/index'

const detailData = (state = {data: null, batch: null}, action) => {
    switch (action.type) {
        case Detail.GET_DETAIL:
            return {
                ...state,
                data: action.obj
            }
        case Detail.SELECT_BATCH:
            return {
                ...state,
                batch: action.obj
            }
        default:
            return state
    }
}

export default detailData
