function rndCode() {
    const getRandomChar = (charSet) => charSet[Math.floor(Math.random() * charSet.length)];

    const letters = 'ABCDEFGHIJKLM';
    const numbers = '0123456789';
    const symbols = '~!@#$%^&*';

    const getRandomLetters = () => getRandomChar(letters) + getRandomChar(letters);
    const getRandomNumbers = () => String(Math.floor(Math.random() * 10000)).padStart(4, '0');
    const getRandomSymbols = () => getRandomChar(symbols) + getRandomChar(symbols);

    return getRandomLetters() + getRandomNumbers() + getRandomSymbols();
}