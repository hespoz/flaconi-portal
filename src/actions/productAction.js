import {
    FETCH_PRODUCTS,
    SET_LOADING_STATE
} from "../commons/constants"

import axios from 'axios'

export function fetchProducts(step) {
    return async (dispatch) => {

        const productList = await axios.get('https://raw.githubusercontent.com/Flaconi/coding-challenges/master/senior-frontend-engineer/resources/productlist.json')

        dispatch({
            type: FETCH_PRODUCTS,
            productList: productList.data
        })

    }
}

export function setLoadingState() {
    return async (dispatch) => {

        dispatch({
            type: SET_LOADING_STATE,
            loading: true
        })

    }
}


