import React from 'react';
import { shallow } from 'enzyme';
import { ProductComponent } from './Product';

const product = {
  id: '1',
  name: 'name',
  type: 'type',
  price: 1,
  photo: ['image'],
  description: 'description',
};

const testFunction = () => {
  console.log('Test function');
};

describe('Component Product', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductComponent product={product} getProductByIdRequest={testFunction} />);
    expect(component).toBeTruthy();
  });
});
