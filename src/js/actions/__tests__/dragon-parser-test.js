import convert from '../dragon-parser';

describe('convert', () => {
  it('converts the csv dragons with multiple elements', () => {
    const csvDragon = {
      name: 'Cinder',
      breedingTime: '20m',
      elements: 'earth/jungle/fire',
      enchantedBreedingTime: '40m',
      stars: 2,
    };

    const dragons = convert([csvDragon]);

    expect(dragons[0].name).toEqual('Cinder');
    expect(dragons[0].breedingTime).toEqual('20m');
    expect(dragons[0].elements).toEqual(['earth', 'jungle', 'fire']);
    expect(dragons[0].enchantedBreedingTime).toEqual('40m');
    expect(dragons[0].stars).toEqual(2);
  });

  it('converts the csv dragons with single elements', () => {
    const csvDragon = {
      name: 'Cinder',
      breedingTime: '20m',
      elements: 'earth',
      enchantedBreedingTime: '40m',
      stars: 2,
    };

    const dragons = convert([csvDragon]);

    expect(dragons[0].name).toEqual('Cinder');
    expect(dragons[0].breedingTime).toEqual('20m');
    expect(dragons[0].elements).toEqual(['earth']);
    expect(dragons[0].enchantedBreedingTime).toEqual('40m');
    expect(dragons[0].stars).toEqual(2);
  });
});
