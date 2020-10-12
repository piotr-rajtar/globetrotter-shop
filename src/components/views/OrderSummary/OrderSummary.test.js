import React from 'react';
import { shallow } from 'enzyme';
import { OrderSummaryComponent } from './OrderSummary';

const cartProducts = [];

describe('Component OrderSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderSummaryComponent cartProducts={cartProducts} />);
    expect(component).toBeTruthy();
  });
});
