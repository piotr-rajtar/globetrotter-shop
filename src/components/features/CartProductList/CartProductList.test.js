import React from 'react';
import { shallow } from 'enzyme';
import { CartProductListComponent } from './CartProductList';

describe('Component CartProductList', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartProductListComponent />);
    expect(component).toBeTruthy();
  });
});
