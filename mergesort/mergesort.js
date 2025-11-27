import { merge } from "./merge.js";

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}

function mergeSortRecursive(arr, stats) {
  // Tæl hvert kald til merge sort
  stats.mergeSortCalls++;

  // 1. Base case: tomt eller enkelt-element array er allerede sorteret
  if (arr.length <= 1) {
    return arr;
  }

  // 2. Del arrayet i to nogenlunde lige store dele
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // 3. Sortér de to dele rekursivt
  const sortedLeft = mergeSortRecursive(left, stats);
  const sortedRight = mergeSortRecursive(right, stats);

  // 4. Merge de to sorterede dele
  const merged = merge(sortedLeft, sortedRight, stats);

  // 5. Returnér det mergede array
  return merged;
}

export function mergeSort(inputArr) {
  // Lav en kopi, så vi IKKE ændrer det originale array
  const arrCopy = inputArr.slice();

  // Stats-objekt til at tælle både rekursive kald og loops i merge
  const stats = {
    mergeSortCalls: 0,
    mergeLoops: 0,
  };

  const sortedArr = mergeSortRecursive(arrCopy, stats);

  // Samlede iterationer: rekursive kald + loop-iterationer i merge
  const iterations = stats.mergeSortCalls + stats.mergeLoops;

  // Tjek om resultatet faktisk er sorteret
  const sorted = isSorted(sortedArr);

  return {
    arr: sortedArr,
    iterations,
    sorted,
  };
}
