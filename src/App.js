import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProducts, fetchOptions} from './actions/productAction'

import Filters from './components/Filters'
import Products from './components/Products'

import 'react-select/dist/react-select.css'
import './App.scss'


@connect((store) => {
    return {
        optionsList: store.products.optionsList,
        productList: store.products.productList,
        step: store.products.step,
        hasMore: store.products.hasMore
    }
})
class App extends Component {

    state = {
        brand:[],
        size:[],
        type:[],
        sort:''
    }

    componentDidMount = () => {
        this.props.dispatch(fetchProducts(this.props.step))
        this.props.dispatch(fetchOptions())
    }

    searchProducts = () => {
        const { brand, size, type, sort } = this.state
        this.props.dispatch(fetchProducts(this.props.step + 10, {
            brand,
            size,
            type,
            sort
        }))
    }

    handleFilterChange = (parameter, value) => {
        this.setState({
            [parameter]:value
        },()=>{
            this.searchProducts()
        })
    }


    render() {

        const { hasMore, optionsList, productList } = this.props

        return (
            <div className='container'>

                    <header>
                        LOGO
                    </header>


                    <Filters {...this.state} optionsList={optionsList} handleFilterChange={this.handleFilterChange}/>

                    <Products
                        productList={productList}
                        hasMore={hasMore}
                        searchProducts={this.searchProducts}/>
            </div>
        );
    }
}

export default App;
