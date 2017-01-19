
function convertElements(elementString) {
  return elementString.split('/');
}

export default function convert(dragonsFromCsv) {
  return dragonsFromCsv.map(dragon => ({
    name: dragon.name,
    elements: convertElements(dragon.elements),
    stars: dragon.stars,
    breedingTime: dragon.breedingTime,
    enchantedBreedingTime: dragon.enchantedBreedingTime,
    breedable: dragon.breedable === 1,
    breedsAs: dragon.breedsAs ? convertElements(dragon.breedsAs) : null,
  }));
}
