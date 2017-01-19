import React from 'react';
import { shallow, mount } from 'enzyme';
import DragonBreedingCalculator from '../dragon-breeding-calculator.jsx';
import DragonPicker from '../dragon-picker';
import DragonElements from '../dragon-elements';
import DragonTable from '../dragon-table';
import * as convert from '../../actions/dragon-parser';
import * as breedingCalculator from '../../actions/breeding-calculator';

describe('DragonBreedingCalculator', () => {
  const dragons = [
    { name: 'Dragon One', elements: ['fire', 'jungle'], breedingTime: '2d' },
    { name: 'Dragon Two', elements: ['earth'], breedingTime: '1d' },
  ];

  beforeEach(() => {
    spyOn(convert, 'default').and.returnValue(dragons);
  });

  describe('render', () => {
    it('renders a title, two dragon pickers with elements and a table', () => {
      const dragonCalc = shallow(<DragonBreedingCalculator />);

      const heading = dragonCalc.childAt(0);
      expect(heading.type()).toEqual('h3');
      expect(heading.text()).toEqual('Breeding Calculator');

      const subHeading = dragonCalc.childAt(1);
      expect(subHeading.type()).toEqual('h5');
      expect(subHeading.text()).toEqual('Dragonvale World');

      const pickers = dragonCalc.childAt(2);
      const leftPicker = pickers.childAt(0).childAt(0);
      expect(leftPicker.type()).toEqual(DragonPicker);
      expect(leftPicker.prop('dragons')).toEqual(dragons);
      const leftElements = pickers.childAt(0).childAt(1);
      expect(leftElements.type()).toEqual(DragonElements);
      expect(leftElements.prop('elements')).toEqual([]);

      const rightPicker = pickers.childAt(1).childAt(0);
      expect(rightPicker.type()).toEqual(DragonPicker);
      expect(rightPicker.prop('dragons')).toEqual(dragons);
      const rightElements = pickers.childAt(1).childAt(1);
      expect(rightElements.type()).toEqual(DragonElements);
      expect(rightElements.prop('elements')).toEqual([]);

      const dragonTable = dragonCalc.childAt(3);
      expect(dragonTable.type()).toEqual(DragonTable);
    });

    it('initial value of left and right dragons is null', () => {
      const dragonCalc = shallow(<DragonBreedingCalculator />);

      expect(dragonCalc.state().leftDragon).toEqual(null);
      expect(dragonCalc.state().rightDragon).toEqual(null);

      const leftPicker = dragonCalc.find(DragonPicker).at(0);
      expect(leftPicker.prop('value')).toEqual(null);

      const rightPicker = dragonCalc.find(DragonPicker).at(1);
      expect(rightPicker.prop('value')).toEqual(null);
    });

    it('initial breeding result is an empty array', () => {
      const dragonCalc = shallow(<DragonBreedingCalculator />);
      expect(dragonCalc.state().breedingResult).toEqual([]);

      const dragonTable = dragonCalc.childAt(3);
      expect(dragonTable.prop('dragons')).toEqual([]);
    });
  });

  describe('events', () => {
    beforeEach(() => {
      const breedingResult = [{ name: 'dragon one', elements: ['air'], breedingTime: '1d' }];
      spyOn(breedingCalculator, 'default').and.returnValue(breedingResult);
    });

    it('on change right dragon, sets rightDragon state', () => {
      const dragonCalc = mount(<DragonBreedingCalculator />);
      const rightPicker = dragonCalc.find(DragonPicker).at(1);
      const rightElements = dragonCalc.find(DragonElements).at(1);

      rightPicker.prop('onChange')(1);

      expect(dragonCalc.state().rightDragon).toEqual(1);
      expect(rightPicker.prop('value')).toEqual(1);
      expect(rightElements.prop('elements')).toEqual(['earth']);

      expect(breedingCalculator.default).not.toHaveBeenCalled();
    });

    it('on change left dragon, sets leftDragon state', () => {
      const dragonCalc = mount(<DragonBreedingCalculator />);
      const leftPicker = dragonCalc.find(DragonPicker).at(0);
      const leftElements = dragonCalc.find(DragonElements).at(0);

      leftPicker.prop('onChange')(0);

      expect(dragonCalc.state().leftDragon).toEqual(0);
      expect(leftPicker.prop('value')).toEqual(0);
      expect(leftElements.prop('elements')).toEqual(['fire', 'jungle']);

      expect(breedingCalculator.default).not.toHaveBeenCalled();
    });

    it('on change right and left dragons, sets state and calls calculator', () => {
      const dragonCalc = mount(<DragonBreedingCalculator />);
      const leftPicker = dragonCalc.find(DragonPicker).at(0);
      const rightPicker = dragonCalc.find(DragonPicker).at(1);

      leftPicker.prop('onChange')(1);
      rightPicker.prop('onChange')(0);

      expect(dragonCalc.state().leftDragon).toEqual(1);
      expect(leftPicker.prop('value')).toEqual(1);
      expect(dragonCalc.state().rightDragon).toEqual(0);
      expect(rightPicker.prop('value')).toEqual(0);

      expect(breedingCalculator.default).toHaveBeenCalledWith(dragons, 1, 0);
      expect(dragonCalc.state().breedingResult).toEqual(
        [{ name: 'dragon one', elements: ['air'], breedingTime: '1d' }]
      );
    });
  });
});
