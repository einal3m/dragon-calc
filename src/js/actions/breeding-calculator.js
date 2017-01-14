import dragons from '../data/dragons';

export default function breedingCalculator(leftDragon, rightDragon) {
  return [dragons[leftDragon], dragons[rightDragon]];
}
