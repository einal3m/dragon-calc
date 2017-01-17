import React from 'react';
import { shallow } from 'enzyme';
import { AIR } from '../../data/dragon-elements';
import ElementIcon from '../element-icon';
import dragonIcons from '../../data/dragon-icons';

describe('DragonPicker', () => {
  it('renders the icon for the required element', () => {
    const icon = shallow(<ElementIcon element={AIR} />);
    expect(icon.type()).toEqual('img');
    expect(icon.prop('src')).toEqual(dragonIcons[AIR]);
  });
});
