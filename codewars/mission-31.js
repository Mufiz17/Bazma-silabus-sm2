function blackAndWhite(arr) {
    if (!Array.isArray(arr)) {
        return "It's a fake array";
    }

    return arr.includes(5) && arr.includes(13) ? "It's a black array" : "It's a white array";
}