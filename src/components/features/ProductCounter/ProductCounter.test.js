import React from 'react';
import { shallow } from 'enzyme';
import { ProductCounterComponent } from './ProductCounter';

describe('Component ProductCounter', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductCounterComponent />);
    expect(component).toBeTruthy();
  });
});
