function sortIt(arr) {
    return arr.slice().sort((a, b) => {
        const countA = arr.filter(num => num === a).length;
        const countB = arr.filter(num => num === b).length;

        if (countA !== countB) {
            return countA - countB; // Ascending order by count
        } else {
            return b - a; // Descending order by value
        }
    });
}