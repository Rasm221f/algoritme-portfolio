const { insertionSort } = require("./insertionsort.js");

const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];

const result = insertionSort(list);

console.log("Sorted array:", result.arr);
console.log("Iterations:", result.iterations);
console.log("Is sorted?:", result.sorted);