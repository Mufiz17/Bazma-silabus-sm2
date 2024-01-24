const thinkingAndTesting = (number, base) =>
    number - base ** (Math.log(number) / Math.log(base) ^ 0);