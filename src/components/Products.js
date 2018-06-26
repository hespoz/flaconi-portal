import React, {Component} from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import ReactStars from 'react-stars'


const renderItems = (productList) => {

    const calculateScale = (x) => {
        return (parseInt(x) * 5) / 100
    }

    const centsToEuro = (cents) => {
        return (cents / 100).toLocaleString("de-DE", {style: "currency", currency: "EUR"})
    }

    if(productList.length === 0){
        return <div className='col-12 ' align="center">
            Not record found
        </div>
    }
    return productList.map((product) => {
        return (
            <div className='col-xs-6 col-sm-5 col-md-4 col-lg-3' align="center">
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
                            ab {centsToEuro(product.price)} / {product.size}
                        </div>
                        <ReactStars
                            count={5}
                            value={calculateScale(product.rating)}
                            size={24}
                            edit={false}
                            color1={'white'}
                            color2={'gray'}/>
                    </footer>
                </div>
            </div>
        )
    })
}


const Products = (props) => {

    const { hasMore } = props

    return (
        <section>
            <InfiniteScroll
                pageStart={0}
                loadMore={props.searchProducts}
                hasMore={hasMore}
                loader={<div className="loader">Loading ...</div>}>
                <div className='row'>
                    {renderItems(props.productList)}
                </div>
            </InfiniteScroll>
        </section>
    )

}

export default Products