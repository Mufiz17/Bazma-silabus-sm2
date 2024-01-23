const firstIndex = str.indexOf(c);
const lastIndex = str.lastIndexOf(c);

if (firstIndex === -1) {
    return -1;
} else if (firstIndex === lastIndex) {
    return 0;
} else {
    return lastIndex - firstIndex;
}