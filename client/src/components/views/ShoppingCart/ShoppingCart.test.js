import React from 'react';
import { shallow } from 'enzyme';
import { ShoppingCartComponent } from './ShoppingCart';

const cartProducts = [];

const testFunction = () => {
  return null;
};

describe('Component ShoppingCart', () => {
  it('should render without crashing', () => {
    const component = shallow(<ShoppingCartComponent cartProducts={cartProducts} getCartProducts={testFunction} />);
    expect(component).toBeTruthy();
  });
});
