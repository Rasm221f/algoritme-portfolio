function merge(left, right, stats) {
  const result = [];
  let i = 0;
  let j = 0;

  // Så længe der er elementer i begge arrays
  while (i < left.length && j < right.length) {
    stats.mergeLoops++; // én iteration af dette while-loop

    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Kopiér evt. rester fra left
  while (i < left.length) {
    stats.mergeLoops++; // én iteration mere
    result.push(left[i]);
    i++;
  }

  // Kopiér evt. rester fra right
  while (j < right.length) {
    stats.mergeLoops++; // én iteration mere
    result.push(right[j]);
    j++;
  }

  return result;
}

export { merge };