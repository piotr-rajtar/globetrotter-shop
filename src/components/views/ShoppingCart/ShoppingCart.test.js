import React from 'react';
import { shallow } from 'enzyme';
import { ShoppingCartComponent } from './ShoppingCart';

describe('Component ShoppingCart', () => {
  it('should render without crashing', () => {
    const component = shallow(<ShoppingCartComponent />);
    expect(component).toBeTruthy();
  });
});
