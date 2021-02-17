const smallLettersCB = document.querySelector('#smallLetters');
const bigLettersCB = document.querySelector('#bigLetters');
const numbersCB = document.querySelector('#numbers');
const symbolsCB = document.querySelector('#symbols');
const lengthInput = document.querySelector('#passLength');

const generator_button = document.querySelector('#generateButton');
const copyButton = document.querySelector('#copyButton');
const password = document.querySelector('#password');

generator_button.addEventListener('click', generetePassword);
copyButton.addEventListener('click', copyPassword);

const smallLettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const bigLettersArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbersArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const symbolsArr = ['-', '+', '_', '=', '{', '}', '[', ']', '!', '@', '#', '$', '%', '&', '?', '(', ')', '*', '|'];
let symbols = [];

function generetePassword(){

    if(smallLettersCB.checked){
        symbols.push(...smallLettersArr);
    }
    if(bigLettersCB.checked){
        symbols.push(...bigLettersArr);
    }
    if(numbersCB.checked){
        symbols.push(...numbersArr);
    }
    if(symbolsCB.checked){
        symbols.push(...symbolsArr);
    }

    let passwordLength = lengthInput.value;
    let password_text = [];

    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * symbols.length);
        password_text[i] = symbols[randomNumber];
    }
    password.value = password_text.join('');
    console.log(password_text.join(''));

    symbols = [];
}

function copyPassword(){
    password.select();
    password.setSelectionRange(0, 9999);
    document.execCommand('copy');
    password.classList.toggle('active');
}