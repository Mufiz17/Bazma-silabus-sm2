function cutIt(arr) {
    const shortestLength = Math.min(...arr.map(str => str.length));
    return arr.map(str => str.slice(0, shortestLength));
}