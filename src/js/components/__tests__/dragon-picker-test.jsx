import React from 'react';
import { shallow } from 'enzyme';
import DragonPicker from '../dragon-picker';

describe('DragonPicker', () => {
  it('is a select', () => {
    const picker = shallow(<DragonPicker />);
    expect(picker.find('option').length).toEqual(3);
  });
});
