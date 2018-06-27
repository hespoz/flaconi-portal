import React, {Component} from 'react'
import ReactLoading from 'react-loading'

const Loader = () => (
    <div className="row">
        <div className="col-12" align="center">
            <ReactLoading type={'spokes'} color={'black'} height={50} width={50}/>
        </div>
    </div>
)

export default Loader
