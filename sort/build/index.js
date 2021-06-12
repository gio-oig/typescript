"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharacterCollection_1 = require("./CharacterCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var stringCollection = new CharacterCollection_1.CharacterCollection('Xaayb');
// const sorter = new Sorter(numbersCollection);
var sorter = new Sorter_1.Sorter(stringCollection);
sorter.sort();
console.log(stringCollection.data);