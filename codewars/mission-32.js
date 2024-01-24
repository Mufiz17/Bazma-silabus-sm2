function roundIt(n) {
    const [integerPart, decimalPart] = n.toString().split('.');
    const leftDigits = integerPart.length;
    const rightDigits = decimalPart ? decimalPart.length : 0;

    if (leftDigits < rightDigits) {
        return Math.ceil(n);
    } else if (leftDigits > rightDigits) {
        return Math.floor(n);
    } else {
        return Math.round(n);
    }
}