import React from 'react';
import Products from '../components/Products/Products';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    expect(shallow(<Products productList={[]} hasMore={false} loading={false} searchProducts={() => console.log('test')}/>).length).toEqual(1)
});

it('renders one product', () => {
    const products =[
        {
            "id": "30150001",
            "name": "Lancôme La vie est belle Eau de Parfum",
            "slug": "parfum/lancome/la-vie-est-belle/lancome-la-vie-est-belle-eau-de-parfum.html",
            "brand": "Lancôme",
            "type": "Eau de Parfum",
            "image": "https://cdn.flaconi.de/media/catalog/215x/l/a/lancome-la-vie-est-belle-eau-de-parfum-30-ml.jpg",
            "price": 3895,
            "size": "30ML",
            "rating": 99
        }
    ]

    const wrapper = shallow(<Products productList={products} hasMore={false} loading={false} searchProducts={() => console.log('test')}/>)

    expect(wrapper.find('.item-container').length).toEqual(1)
    expect(wrapper.find('section div strong').at(0).prop('children')).toEqual(products[0].brand)
    expect(wrapper.find('section div strong').at(1).prop('children')).toEqual(products[0].type)
    expect(wrapper.find('.price').prop('children')).toEqual(["ab ", "€ 38.95", " / ", "30ML"])

});
¡