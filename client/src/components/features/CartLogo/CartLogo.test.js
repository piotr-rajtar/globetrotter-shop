import React from 'react';
import { shallow } from 'enzyme';
import { CartLogoComponent } from './CartLogo';

const cartProducts = [];

const testFunction = () => {
  return null;
};

describe('Component CartLogo', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartLogoComponent cartProducts={cartProducts} getCartProducts={testFunction} />);
    expect(component).toBeTruthy();
  });
});
