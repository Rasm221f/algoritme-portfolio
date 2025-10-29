export function binarySearch (searchFor, values) {
  let low = 0;
  let high = values.length - 1;
  let iterations = 0;

  while (low <= high) {
    iterations++;
    const mid = Math.floor((low + high) / 2);
    if (values[mid] === searchFor) {
      return { found: true, index: mid, iterations };
    }
    if (values[mid] < searchFor) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return { found: false, index: -1, iterations };
}