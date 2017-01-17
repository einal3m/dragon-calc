import React from 'react';
import { shallow } from 'enzyme';
import { AIR, FIRE } from '../../data/dragon-elements';
import DragonElements from '../dragon-elements';
import DragonIcon from '../element-icon';

describe('DragonElements', () => {
  it('renders the dragon icons for the array of elements', () => {
    const icon = shallow(<DragonElements elements={[FIRE, AIR]} />);

    expect(icon.childAt(0).type()).toEqual(DragonIcon);
    expect(icon.childAt(0).prop('element')).toEqual(FIRE);

    expect(icon.childAt(1).type()).toEqual(DragonIcon);
    expect(icon.childAt(1).prop('element')).toEqual(AIR);
  });
});
