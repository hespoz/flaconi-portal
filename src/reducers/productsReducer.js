import {
    FETCH_PRODUCTS,
    SET_LOADING_STATE
} from "../commons/constants"

export default function reducer(state = {
    productList:[],
    loading: false,
    step:5
}, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                productList:action.productList,
                loading:false,
                step: action.step
            }
            break;
        case SET_LOADING_STATE:
            return {
                ...state,
                loading:true
            }
            break;
        default:
            break;
    }

    return state
}