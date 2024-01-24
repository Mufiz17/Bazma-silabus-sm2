function mirrorImage(arr) {
    const pair = arr.slice(0, -1).find((num, index) => isMirrorImagePair(num, arr[index + 1]));

    return pair ? [pair, arr[arr.indexOf(pair) + 1]] : [-1, -1];
}

function isMirrorImagePair(num1, num2) {
    return num1.toString() === num2.toString().split('').reverse().join('');
}