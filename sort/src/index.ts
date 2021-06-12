import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const stringCollection = new CharacterCollection('Xaayb');

// const sorter = new Sorter(numbersCollection);
const sorter = new Sorter(stringCollection);

sorter.sort();
console.log(stringCollection.data);
