
// Script.js

const screen = document.getElementsByClassName('screen')[0];
const Elem = selector => document.querySelector(selector);


let operation = '';

screen.innerText = "";

Elem('.one').addEventListener("click", () => {
    screen.innerHTML = screen.innerHTML + "1";
});
Elem('.two').addEventListener("click", () => {
    screen.innerHTML = screen.innerHTML + "2";
});
Elem('.three').addEventListener("click", () => {
    screen.innerHTML = screen.innerHTML + "3";
});
Elem('.four').addEventListener("click", () => {
    screen.innerHTML = screen.innerHTML + "4";
});
Elem('.five').addEventListener("click", () => {
    screen.innerHTML = screen.innerHTML + "5";
});
Elem('.six').addEventListener("click", () => {
    screen.innerHTML = screen.innerHTML + "6";
});
Elem('.seven').addEventListener("click", () => {
    screen.innerHTML = screen.innerHTML + "7";
});
Elem('.eight').addEventListener("click", () => {
    screen.innerHTML = screen.innerHTML + "8";
});
Elem('.nine').addEventListener("click", () => {
    screen.innerHTML = screen.innerHTML + "9";
});
Elem('.zero').addEventListener("click", () => {
    screen.innerHTML = screen.innerHTML + "0";
});


Elem('.plus').addEventListener("click", () => {
    if (operation == '') {
        operation = '+';
        screen.innerHTML = screen.innerHTML + "+";
    }
});

Elem('.minus').addEventListener("click", () => {
    if (operation == '') {
        operation = '-';
        screen.innerHTML = screen.innerHTML + "-";
    }
});

Elem('.multiply').addEventListener("click", () => {
    if (operation == '') {
        operation = '*';
        screen.innerHTML = screen.innerHTML + "*";
    }
});

Elem('.divide').addEventListener("click", () => {
    if (operation == '') {
        operation = '%';
        screen.innerHTML = screen.innerHTML + "%";
    }
});


Elem('.equals').addEventListener("click", () => {

    let value1 = 10;
    let value2 = 10;

    // console.log(screen.innerHTML.toString().match(/\d{1,9}/)[0])
    value1 = screen.innerHTML.toString().match(/\d{1,9}/)[0];
    value2 = screen.innerHTML.toString().match(/\W\d{1,4}/)[0].slice(1);

    value1 = Number(value1);
    value2 = Number(value2);
    if (operation == '+') {
        screen.innerHTML = value1 + value2;
    } else if (operation == '-') {
        screen.innerHTML = value1 - value2;
    } else if (operation == '*') {
        screen.innerHTML = value1 * value2;
    } else if (operation == '%') {
        screen.innerHTML = value1 / value2;
    } else {
        screen.innerHTML = screen.innerHTML;
    }
});