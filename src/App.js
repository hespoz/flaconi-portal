import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProducts, setLoadingState} from './actions/productAction'
import ReactStars from 'react-stars'

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

    calculateScale = (x) => {
        //100 > 5
        //50  > Y   > 100y = x5/100
        console.log((parseInt(x) * 5) / 100)
        return (parseInt(x) * 5) / 100
    }

    centsToEuro = (cents) => {
        return (cents/100).toLocaleString("de-DE", {style:"currency", currency:"EUR"})
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

                                        <div>
                                            ab {this.centsToEuro(product.price)} / {product.size}
                                        </div>
                                        <ReactStars
                                            count={5}
                                            value={this.calculateScale(product.rating)}
                                            size={24}
                                            edit={false}
                                            color1={'white'}
                                            color2={'gray'} />
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
