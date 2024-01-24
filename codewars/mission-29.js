function bigToSmall(arr) {
    const flatArray = [].concat(...arr).sort((a, b) => b - a);
    return flatArray.join('>');
}