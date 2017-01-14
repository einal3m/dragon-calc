import React from 'react';
import { shallow } from 'enzyme';
import DragonPicker from '../dragon-picker';

describe('DragonPicker', () => {
  const dragons = [
    { name: 'dragon one' }, { name: 'dragon two' }, { name: 'dragon three' }, { name: 'dragon four' },
  ];
  let onChangeSpy;

  beforeEach(() => {
    onChangeSpy = jasmine.createSpy('onChangeSpy');
  });

  it('is a select with dragon options', () => {
    const picker = shallow(<DragonPicker dragons={dragons} value={2} onChange={onChangeSpy} />);
    expect(picker.prop('value')).toEqual(2);

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

  it('shows a placeholder when no value is given', () => {
    const picker = shallow(<DragonPicker dragons={dragons} onChange={onChangeSpy} />);
    expect(picker.prop('value')).toEqual(-1);

    const options = picker.find('option');
    expect(options.length).toEqual(5);

    expect(options.at(0).text()).toEqual('Please select...');
    expect(options.at(0).prop('value')).toEqual(-1);
    expect(options.at(0).prop('disabled')).toEqual(true);

    expect(options.at(1).text()).toEqual('dragon one');
    expect(options.at(2).text()).toEqual('dragon two');
    expect(options.at(3).text()).toEqual('dragon three');
    expect(options.at(4).text()).toEqual('dragon four');
  });

  it('calls the onChange prop when user selects a dragon', () => {
    const picker = shallow(<DragonPicker dragons={dragons} onChange={onChangeSpy} />);

    picker.prop('onChange')({ target: { value: 4 } });

    expect(onChangeSpy).toHaveBeenCalledWith(4);
  });
});
