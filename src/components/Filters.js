import React, {Component} from 'react'
import Select from 'react-select'


const newDirection = (sort) => {
    if (sort === '') {
        return 'asc'
    } else if (sort === 'asc') {
        return 'desc'
    } else {
        return ''
    }
}

const sortLabel = (sort) => {
    switch (sort) {
        case 'asc':
            return '$'
        case 'desc':
            return '$$$'
        default:
            return 'Sort by Price'
    }
}

const Filters = (props) => {

    const {brand, size, type, sort, optionsList} = props

    if (optionsList === null) {
        return null
    }

    return (
        <section >
            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                    <Select
                        name="form-field-name"
                        value={brand}
                        onChange={(value) => {
                            props.handleFilterChange('brand', value)
                        }}
                        multi
                        options={optionsList.brandList}
                    />
                </div>

                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                    <Select
                        name="form-field-name"
                        value={size}
                        onChange={(value) => {
                            props.handleFilterChange('size', value)
                        }}
                        multi
                        options={optionsList.sizeList}
                    />
                </div>

                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                    <Select
                        name="form-field-name"
                        value={type}
                        onChange={(value) => {
                            props.handleFilterChange('type', value)
                        }}
                        multi
                        options={optionsList.typeList}
                    />
                </div>

            </div>
            <div className='row'>
                <div className='offset-10 col-2' align="right">
                    <a className='sort' onClick={() => {
                        props.handleFilterChange('sort', newDirection(sort))
                    }}>{sortLabel(sort)}</a>
                </div>
            </div>
        </section>


    )
}

export default Filters