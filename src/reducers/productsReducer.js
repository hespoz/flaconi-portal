import {
    FETCH_PRODUCTS,
    FETCH_OPTIONS, SHOW_LOADER
} from "../commons/constants"

export default function reducer(state = {
    optionsList:null,
    productList:null,
    hasMore: true,
    loading: false,
    step:10
}, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                productList:action.productList,
                hasMore:action.hasMore,
                step: action.step,
                loading: false
            }
            break;

        case FETCH_OPTIONS:
            return {
                ...state,
                optionsList:action.optionsList
            }
            break;

        case SHOW_LOADER:
            return {
                ...state,
                loading:true
            }

        default:
            break;
    }

    return state
}