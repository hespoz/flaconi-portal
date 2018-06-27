import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProducts, fetchOptions, showLoader} from '../actions/productAction'

import Filters from '../components/Filters/Filters'
import Products from '../components/Products/Products'

import './App.scss'

@connect((store) => {
    return {
        optionsList: store.products.optionsList,
        productList: store.products.productList,
        step: store.products.step,
        hasMore: store.products.hasMore,
        loading: store.products.loading
    }
})
class App extends Component {

    state = {
        brand: [],
        size: [],
        type: [],
        sort: ''
    }

    componentDidMount = () => {
        this.props.dispatch(fetchProducts(this.props.step))
        this.props.dispatch(fetchOptions())
    }

    searchProducts = (showGlobalLoader) => {
        const {brand, size, type, sort} = this.state

        if(showGlobalLoader){
            this.props.dispatch(showLoader())
        }

        this.props.dispatch(fetchProducts(this.props.step + 10, {
            brand,
            size,
            type,
            sort
        }))
    }

    handleFilterChange = (parameter, value) => {
        this.setState({
            [parameter]: value
        }, () => {
            this.searchProducts(true)
        })
    }


    render() {

        const {hasMore, optionsList, productList, loading} = this.props

        return (
            <div className='container'>

                <header className='text-center'>
                    <img src={'https://cdn.flaconi.de/themes/flaconi/assets/20180615150324/images/svg/logo-flaconi.svg'}
                         width={187} height={38} alt='flaconi-logo'/>
                </header>


                <Filters {...this.state} optionsList={optionsList} handleFilterChange={this.handleFilterChange}/>


                <Products
                    productList={productList}
                    hasMore={hasMore}
                    loading={loading}
                    searchProducts={() => this.searchProducts(false)}/>
            </div>
        );
    }
}

export default App;
