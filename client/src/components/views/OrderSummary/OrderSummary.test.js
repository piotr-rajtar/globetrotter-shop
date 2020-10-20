import React from 'react';
import { shallow } from 'enzyme';
import { OrderSummaryComponent } from './OrderSummary';

const cartProducts = [];

const testFunction = () => {
  return null;
};

describe('Component OrderSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderSummaryComponent cartProducts={cartProducts} getCartProducts={testFunction} />);
    expect(component).toBeTruthy();
  });
});
