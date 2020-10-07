import React from 'react';
import { shallow } from 'enzyme';
import { ProductBoxComponent } from './ProductBox';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductBoxComponent id='id' name='name' type='type' price={4} photo='photo' />);
    expect(component).toBeTruthy();
  });
});
