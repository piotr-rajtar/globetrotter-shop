import React from 'react';
import { shallow } from 'enzyme';
import { CartProductListComponent } from './CartProductList';

const cartProducts = [];

describe('Component CartProductList', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartProductListComponent cartProducts={cartProducts} />);
    expect(component).toBeTruthy();
  });
});
