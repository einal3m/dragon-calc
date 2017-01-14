import { AIR, EARTH, FIRE, FAIRY, FROZEN, WATER, JUNGLE } from './dragon-elements';

const dragons = [
  { name: 'Fire', elements: [FIRE], breedingTime: '30m', enchantedBreedingTime: '50m' },
  { name: 'Jungle', elements: [JUNGLE], breedingTime: '20m', enchantedBreedingTime: '2m' },
  { name: 'Wildfire', elements: [FIRE, JUNGLE], breedingTime: '20m', enchantedBreedingTime: '30m' },
  { name: 'Flytrap', elements: [JUNGLE, FIRE], breedingTime: '25m', enchantedBreedingTime: '45m' },
  { name: 'Venom', elements: [FIRE, JUNGLE], breedingTime: '45m', enchantedBreedingTime: '1h 10m' },
  { name: 'Earth', elements: [EARTH], breedingTime: '10m', enchantedBreedingTime: '10m' },
  { name: 'Thermal', elements: [FIRE, EARTH], breedingTime: '4h', enchantedBreedingTime: '6h 30m' },
  { name: 'Magma', elements: [EARTH, FIRE], breedingTime: '2h 45m', enchantedBreedingTime: '4h 25m' },
  { name: 'Oasis', elements: [JUNGLE, EARTH], breedingTime: '1h 55m', enchantedBreedingTime: '3h 5m' },
  { name: 'Underbrush', elements: [EARTH, JUNGLE], breedingTime: '1h 25m', enchantedBreedingTime: '2h 15m' },
  { name: 'Cinder', elements: [FIRE, EARTH, JUNGLE], breedingTime: '2h 5m', enchantedBreedingTime: '1h 35m' },
];

export default dragons;
