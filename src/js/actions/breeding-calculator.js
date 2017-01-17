
const elements = (...elementArrays) => new Set([].concat(...elementArrays));

export default function breedingCalculator(dragons, leftDragon, rightDragon) {
  const selectedElements = elements(dragons[leftDragon].elements, dragons[rightDragon].elements);
  const result = [];

  dragons.forEach((dragon) => {
    const matchingElements = dragon.elements.filter(element => selectedElements.has(element));
    if (matchingElements.length === dragon.elements.length) {
      result.push(dragon);
    }
  });

  return result;
}
