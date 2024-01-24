const shuffleIt = (arr, ...swaps) => {
    swaps.forEach(([a, b]) => [arr[a], arr[b]] = [arr[b], arr[a]]);
    return arr;
};