import React from 'react';
import { shallow } from 'enzyme';
import { ProductListComponent } from './ProductList';

const products = [
  {
    id: '1',
    name: 'name',
    price: 'price',
  },
];

describe('Component ProductList', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductListComponent products={products} />);
    expect(component).toBeTruthy();
  });
});
