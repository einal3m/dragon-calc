import convert from '../dragon-parser';

describe('convert', () => {
  it('converts the csv dragons with multiple elements', () => {
    const csvDragon = {
      name: 'Cinder',
      breedingTime: '20m',
      elements: 'earth/jungle/fire',
      enchantedBreedingTime: '40m',
      breedsAs: '',
      stars: 2,
      breedable: 1,
    };

    const dragons = convert([csvDragon]);

    expect(dragons[0].name).toEqual('Cinder');
    expect(dragons[0].breedingTime).toEqual('20m');
    expect(dragons[0].elements).toEqual(['earth', 'jungle', 'fire']);
    expect(dragons[0].breedsAs).toEqual(null);
    expect(dragons[0].enchantedBreedingTime).toEqual('40m');
    expect(dragons[0].stars).toEqual(2);
    expect(dragons[0].breedable).toEqual(true);
  });

  it('converts the csv dragons with single elements', () => {
    const csvDragon = {
      name: 'Cinder',
      breedingTime: '20m',
      elements: 'earth',
      enchantedBreedingTime: '40m',
      breedsAs: 'earth/jungle',
      stars: 2,
      breedable: 0,
    };

    const dragons = convert([csvDragon]);

    expect(dragons[0].name).toEqual('Cinder');
    expect(dragons[0].breedingTime).toEqual('20m');
    expect(dragons[0].elements).toEqual(['earth']);
    expect(dragons[0].breedsAs).toEqual(['earth', 'jungle']);
    expect(dragons[0].enchantedBreedingTime).toEqual('40m');
    expect(dragons[0].stars).toEqual(2);
    expect(dragons[0].breedable).toEqual(false);
  });
});
