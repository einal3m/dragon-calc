import breedingCalculator from '../breeding-calculator';
import dragons from '../../data/dragons';

describe('breedingCalculator', () => {
  it('returns the left and right dragons', () => {
    expect(breedingCalculator(1, 2)).toEqual([dragons[1], dragons[2]]);
  });
});
