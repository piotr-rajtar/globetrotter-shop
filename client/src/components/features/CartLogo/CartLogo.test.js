import React from 'react';
import { shallow } from 'enzyme';
import { CartLogoComponent } from './CartLogo';

const cartProducts = [];

describe('Component CartLogo', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartLogoComponent cartProducts={cartProducts} />);
    expect(component).toBeTruthy();
  });
});
