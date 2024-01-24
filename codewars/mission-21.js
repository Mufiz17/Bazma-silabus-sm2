s = s.trim(); // Clear whitespace from both sides
let result = '';

for (let i = 1; i <= 5; i++) {
    result += `${s.repeat(i)}\n`;
}

return result.trim();