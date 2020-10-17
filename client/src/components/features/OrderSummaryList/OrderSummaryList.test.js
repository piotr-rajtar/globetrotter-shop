import React from 'react';
import { shallow } from 'enzyme';
import { OrderSummaryListComponent } from './OrderSummaryList';

const cartProducts = [];

describe('Component OrderSummaryList', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderSummaryListComponent cartProducts={cartProducts} />);
    expect(component).toBeTruthy();
  });
});
