import {
    FETCH_PRODUCTS,
    FETCH_OPTIONS,
    SHOW_LOADER
} from "../commons/constants"

import _ from 'lodash'
import productList from './productlist'
import optionsList from './optionsList'

export function fetchProducts(step, filter = {
    brand:[],
    size:[],
    type:[],
    sort:''
}) {
    return async (dispatch) => {

        //The timeout emulate the delay with the API. Just put it to show the loading in the frontend.
        setTimeout(() => {

            let productListFiltered = _.filter(productList, (product) => {

                const byBrand = filter.brand.length === 0 ? true : _.map(filter.brand, 'value').includes(product.brand)
                const bySize = filter.size.length === 0 ? true : _.map(filter.size, 'value').includes(product.size)
                const byType = filter.type.length === 0 ? true : _.map(filter.type, 'value').includes(product.type)

                return byBrand && bySize && byType;
            })

            if(filter.sort !== ''){
                productListFiltered = _.orderBy(productListFiltered, ['price'], [filter.sort])
            }

            dispatch({
                type: FETCH_PRODUCTS,
                productList: _.take(productListFiltered, step),
                step: step,
                hasMore: step < productListFiltered.length
            })
        }, 1000)


    }
}

export function fetchOptions() {
    return async (dispatch) => {
        dispatch({
            type: FETCH_OPTIONS,
            optionsList: optionsList
        })
    }
}

export function showLoader() {
    return async (dispatch) => {
        dispatch({
            type: SHOW_LOADER
        })
    }
}


