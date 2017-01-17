import React from 'react';
import { shallow } from 'enzyme';
import DragonTable from '../dragon-table';
import DragonElements from '../dragon-elements';

describe('DragonTable', () => {
  const dragons = [
    { name: 'dragon one', elements: ['air', 'earth'], breedingTime: '20min' },
    { name: 'dragon two', elements: ['fire', 'jungle'], breedingTime: '1h 5m' },
  ];
  let table;

  beforeEach(() => {
    table = shallow(<DragonTable dragons={dragons} />);
  });

  it('renders a table with a row for each dragon', () => {
    expect(table.type()).toEqual('table');

    const rows = table.find('tbody tr');
    expect(rows.length).toEqual(2);
  });

  it('renders a table with header row', () => {
    const tableHeadings = table.find('thead th');

    expect(tableHeadings.length).toEqual(3);

    expect(tableHeadings.at(0).text()).toEqual('Name');
    expect(tableHeadings.at(1).text()).toEqual('Types');
    expect(tableHeadings.at(2).text()).toEqual('Time');
  });

  it('renders each row with dragon name, types and breeding times', () => {
    const rows = table.find('tbody tr');

    const firstRow = rows.at(0);
    expect(firstRow.children().length).toEqual(3);
    expect(firstRow.childAt(0).text()).toEqual('dragon one');
    expect(firstRow.childAt(1).childAt(0).type()).toEqual(DragonElements);
    expect(firstRow.childAt(1).childAt(0).prop('elements')).toEqual(['air', 'earth']);
    expect(firstRow.childAt(2).text()).toEqual('20min');

    const secondRow = rows.at(1);
    expect(secondRow.children().length).toEqual(3);
    expect(secondRow.childAt(0).text()).toEqual('dragon two');
    expect(secondRow.childAt(1).childAt(0).type()).toEqual(DragonElements);
    expect(secondRow.childAt(1).childAt(0).prop('elements')).toEqual(['fire', 'jungle']);
    expect(secondRow.childAt(2).text()).toEqual('1h 5m');
  });
});
