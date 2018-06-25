import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProducts, setLoadingState} from './actions/productAction'
import Infinite from 'react-infinite'

import './App.scss';


@connect((store) => {
    return {
        productList: store.products.productList,
        step: store.products.step
    }
})
class App extends Component {

    state = {
        loading: true
    }

    componentDidMount = () => {
        this.props.dispatch(fetchProducts(this.props.step))
    }

    renderLoading = () => {
        return <div>
            Loading...
        </div>
    }

    handleFetchOnScroll = () => {
        this.props.dispatch(setLoadingState())
        this.props.dispatch(fetchProducts(this.props.step + 5))
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>


                    {this.props.productList.map((product) => {
                        return (
                            <div className='product-list-container'>
                                <div className='item-container'>
                                    <header>
                                        <img src={product.image} className='img-fluid' alt={product.name}/>
                                    </header>
                                    <section>
                                        <div><b>{product.brand}</b></div>
                                        <div><b>{product.type}</b></div>
                                    </section>
                                    <footer>

                                    </footer>
                                </div>
                            </div>
                        )
                    })}


                </div>


            </div>
        );
    }
}

export default App;
