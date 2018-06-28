import React, {Component} from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import ReactStars from 'react-stars'
import Loader from '../Loader'

import './Products.scss'

const renderItems = (productList) => {

    const calculateScale = (x) => {
        return (parseInt(x) * 5) / 100
    }

    const centsToEuro = (cents) => {
        return (cents / 100).toLocaleString("de-DE", {style: "currency", currency: "EUR"})
    }

    if (productList === null) {
        return null
    }

    if (productList.length === 0) {
        return <div className='col-12' align="center">
            <h6>Unfortunately we do not find products with your search criteria</h6>
        </div>
    }
    return productList.map((product, index) => {
        return (
            <div key={index} className='col-xs-6 col-sm-5 col-md-4 col-lg-3' align="center">
                <div className='item-container'>
                    <header>
                        <img src={product.image} className='img-fluid' alt={product.name}/>
                    </header>
                    <section>
                        <div><strong>{product.brand}</strong></div>
                        <div><strong>{product.type}</strong></div>
                    </section>
                    <footer>
                        <div className='price'>
                            ab {centsToEuro(product.price)} / {product.size}
                        </div>
                        <ReactStars
                            count={5}
                            value={calculateScale(product.rating)}
                            size={12}
                            edit={false}
                            color1={'white'}
                            color2={'black'}/>
                    </footer>
                </div>
            </div>
        )
    })
}


const Products = (props) => {

    const {productList, hasMore, loading} = props


    return (
        <section>
            <InfiniteScroll
                pageStart={0}
                loadMore={props.searchProducts}
                hasMore={hasMore}
                loader={!loading ? <Loader/> : null}>

                {loading ?
                    <Loader/>
                    :
                    <div className='row'>
                        {renderItems(productList)}
                    </div>
                }

            </InfiniteScroll>
        </section>
    )

}

export default Products