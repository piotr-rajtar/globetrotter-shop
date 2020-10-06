import React from 'react';
import { shallow } from 'enzyme';
import { ShopLogoComponent } from './ShopLogo';

describe('Component ShopLogo', () => {
  it('should render without crashing', () => {
    const component = shallow(<ShopLogoComponent />);
    expect(component).toBeTruthy();
  });
});
