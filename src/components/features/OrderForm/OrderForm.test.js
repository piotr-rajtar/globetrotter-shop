import React from 'react';
import { shallow } from 'enzyme';
import { OrderFormComponent } from './OrderForm';

const orderData = {};

describe('Component OrderForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderFormComponent orderData={orderData} />);
    expect(component).toBeTruthy();
  });
});
