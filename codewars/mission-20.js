function topSecret(file) {
    let decryptedText = "";

    for (let i = 0; i < file.length; i++) {
        let char = file[i];

        if (/[a-zA-Z]/.test(char)) {
            let isUpperCase = (char === char.toUpperCase());
            let shiftedCharCode = char.charCodeAt(0) - 3;

            if ((isUpperCase && shiftedCharCode < 65) || (!isUpperCase && shiftedCharCode < 97)) {
                shiftedCharCode += 26;
            }

            decryptedText += String.fromCharCode(shiftedCharCode);
        } else {
            decryptedText += char;
        }
    }

    return decryptedText;
}

//question1: The top secret file number is...
answer1 = "1850"
    //question2: Super agent's name is...
answer2 = "fQT"
    //question3: He stole the treasure is...
answer3 = "Train tire"