import React from 'react';
import { shallow } from 'enzyme';
import { PhotoGalleryComponent } from './PhotoGallery';

const images = ['image1', 'image2', 'image3'];

describe('Component PhotoGallery', () => {
  it('should render without crashing', () => {
    const component = shallow(<PhotoGalleryComponent images={images} />);
    expect(component).toBeTruthy();
  });
});
