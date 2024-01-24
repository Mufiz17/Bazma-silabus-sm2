function findSimilarity(str, word) {
    const words = str.split(' ');
    const similarWords = words.filter(w => w.length === word.length && w[0] === word[0] && w[w.length - 1] === word[word.length - 1]);
    return similarWords.join(' ');
}