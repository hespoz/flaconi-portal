import {
    FETCH_PRODUCTS,
    FETCH_OPTIONS
} from "../commons/constants"

export default function reducer(state = {
    optionsList:null,
    productList:[],
    hasMore: true,
    step:10
}, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                productList:action.productList,
                hasMore:action.hasMore,
                step: action.step
            }
            break;

        case FETCH_OPTIONS:
            return {
                ...state,
                optionsList:action.optionsList
            }
            break;

        default:
            break;
    }

    return state
}