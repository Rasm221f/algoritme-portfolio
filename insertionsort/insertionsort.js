// insertionSort.js
// Insertion Sort - SHIFT version (med midlertidig variabel 'key')
// Sorterer arrayet in-place, tæller iterationer og returnerer et objekt:
// { arr, iterations, sorted }

function insertionSort(arr) {
  let iterations = 0; // tæller alle loop-iterationer (ydre + indre)

  // Ydre loop: antager at element 0 allerede er "sorteret"
  for (let i = 1; i < arr.length; i++) {
    iterations++; // én iteration af det ydre loop

    const key = arr[i];   // den værdi vi vil sætte på sin rette plads
    let j = i - 1;

    // Indre loop: shifter alle større værdier én plads til højre
    while (j >= 0 && arr[j] > key) {
      iterations++;       // én iteration af det indre loop
      arr[j + 1] = arr[j];
      j--;
    }

    // Nu er der fundet en plads til key
    arr[j + 1] = key;
  }

  // Tjek om arrayet faktisk er sorteret (stigende)
  const sorted = isSortedAscending(arr);

  // Returnér både array og metadata
  return {
    arr,
    iterations,
    sorted,
  };
}

// Hjælpefunktion til at tjekke om arrayet er sorteret stigende
function isSortedAscending(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}

module.exports = { insertionSort };
