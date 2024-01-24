function countAnimals(animals, count) {
    const animalArray = animals.split(',');
    const result = count.map(animal => animalArray.filter(a => a === animal).length);
    return result;
}