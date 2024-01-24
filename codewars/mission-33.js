function maxMin(arr1, arr2) {
    const differences = arr1.map((value, index) => Math.abs(value - arr2[index]));
    const maxValue = Math.max(...differences);
    const minValue = Math.min(...differences);

    return [maxValue, minValue];
}