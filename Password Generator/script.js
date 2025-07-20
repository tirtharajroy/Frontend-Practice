
// Script js

function eightDigit () {
    let special = "", number = 0, upper = "", lower = "";

    const specialChars = ["#", ":", ";", "^", ",", ".", "?", "!", "|", "&", "_", "`", "~", "@", "$", "%", "/", "\\", "=", "+", "-", "*", "\"", "'"]

    special = specialChars[Math.floor(Math.random() * (specialChars.length))];

    const smallChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    lower = smallChars[Math.floor(Math.random() * (smallChars.length))] + smallChars[Math.floor(Math.random() * (smallChars.length))] + smallChars[Math.floor(Math.random() * (smallChars.length))];

    const upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    upper = upperChars[Math.floor(Math.random() * (upperChars.length))] + upperChars[Math.floor(Math.random() * (upperChars.length))] + upperChars[Math.floor(Math.random() * (upperChars.length))];

    number = Math.floor(Math.random() * 10);

    return lower + number + upper + special;
}

function sixteenDigit () {
    return eightDigit() + eightDigit();
}

document.addEventListener('DOMContentLoaded', function () {

    const screen = document.querySelector('.display-screen p');

    document.querySelectorAll('.btns button')[0].addEventListener("click", () => {
        screen.innerHTML = eightDigit();
    })
    document.querySelectorAll('.btns button')[1].addEventListener("click", () => {
        screen.innerHTML = sixteenDigit();
    })

    document.querySelectorAll('.btns button')[2].addEventListener("click", () => {
        // Copy to Clipboard
        if (screen.innerHTML !== "") {
            navigator.clipboard.writeText(screen.innerHTML)
        .then(() => {
            alert('Copied to Clipboard Successfully!');
        })
        .catch((err) => {
            console.log('Error occurred : ', err);
            alert('Error occurred! Browser may not support this functionality.');
        })
        }
        else {
            alert('Please Generate Password First!');
        }
    })

});