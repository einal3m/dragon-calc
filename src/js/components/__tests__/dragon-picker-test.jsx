import React from 'react';
import { shallow } from 'enzyme';
import DragonPicker from '../dragon-picker';

describe('DragonPicker', () => {
  const dragons = [
    { name: 'dragon one' }, { name: 'dragon two' }, { name: 'dragon three' }, { name: 'dragon four' },
  ];

  it('is a select with dragon options', () => {
    const picker = shallow(<DragonPicker dragons={dragons} />);
    const options = picker.find('option');

    expect(options.length).toEqual(4);

    expect(options.at(0).text()).toEqual('dragon one');
    expect(options.at(0).prop('value')).toEqual(0);

    expect(options.at(1).text()).toEqual('dragon two');
    expect(options.at(1).prop('value')).toEqual(1);

    expect(options.at(2).text()).toEqual('dragon three');
    expect(options.at(2).prop('value')).toEqual(2);

    expect(options.at(3).text()).toEqual('dragon four');
    expect(options.at(3).prop('value')).toEqual(3);
  });
});
