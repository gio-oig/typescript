import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
// const stringCollection = new CharacterCollection('Xaayb');
// const linkedList = new LinkedList();

// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(4);

// const sorter = new Sorter(linkedList);

// sorter.sort();
// console.log(linkedList.print);
console.log(numbersCollection.data);
