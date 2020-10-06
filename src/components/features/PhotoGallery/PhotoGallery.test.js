import React from 'react';
import { shallow } from 'enzyme';
import { PhotoGalleryComponent } from './PhotoGallery';

describe('Component PhotoGallery', () => {
  it('should render without crashing', () => {
    const component = shallow(<PhotoGalleryComponent />);
    expect(component).toBeTruthy();
  });
});
