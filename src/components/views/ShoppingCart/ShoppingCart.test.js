import React from 'react';
import { shallow } from 'enzyme';
import { ShoppingCartComponent } from './ShoppingCart';

const cartProducts = [];

describe('Component ShoppingCart', () => {
  it('should render without crashing', () => {
    const component = shallow(<ShoppingCartComponent cartProducts={cartProducts} />);
    expect(component).toBeTruthy();
  });
});
