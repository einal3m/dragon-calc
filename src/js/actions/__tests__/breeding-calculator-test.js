import breedingCalculator from '../breeding-calculator';
import dragons from '../../data/dragons';

describe('breedingCalculator', () => {
  describe('element matching', () => {
    it('returns dragons whose elements are included in the right and left dragons', () => {

      const jungle = 1;
      const earth = 5;
      const oasis = 8;
      const underbrush = 9;

      expect(breedingCalculator(1, 5)).toEqual(
        [dragons[jungle], dragons[earth], dragons[oasis], dragons[underbrush]]
      );
      expect(breedingCalculator(5, 1)).toEqual(
        [dragons[jungle], dragons[earth], dragons[oasis], dragons[underbrush]]
      );
    });
  });
});
