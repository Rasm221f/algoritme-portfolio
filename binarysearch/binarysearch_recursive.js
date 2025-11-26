export function binarySearchRecursive(search, values, start, end, iterations, comparator){
    // defaults for the simple 2-argument call used in tests
    if (!Array.isArray(values) || values.length === 0) {
        return { found: false, index: -1, iterations: iterations || 1 };
    }
    if (typeof start === "undefined" || start === null) start = 0;
    if (typeof end === "undefined" || end === null) end = values.length - 1;
    if (typeof iterations === "undefined" || iterations === null) iterations = 1;
    if (typeof comparator !== "function") comparator = defaultComparator;

    if (iterations > values.length) {
    return { found: false, index: -1, iterations: iterations - 1 };
    }
    if (start > end) {
    return { found: false, index: -1, iterations: iterations - 1 };
    }

    const middle = Math.floor((start + end) / 2);
    const result = comparator(search, values[middle]);

    if (result === 0) {
        return { found: true, index: middle, iterations };
    }

    if (result < 0) {
        // search is less than middle -> left half
        return binarySearchRecursive(search, values, start, middle - 1, iterations + 1, comparator);
    }

    // search is greater than middle -> right half
    return binarySearchRecursive(search, values, middle + 1, end, iterations + 1, comparator);
}

function defaultComparator(val, val2){
    if(val === val2){
        return 0;
    }
    if(val < val2){
        return -1;
    }
    return +1;
}