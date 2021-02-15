const generator_button = document.querySelector('#generateButton');
const password = document.querySelector('#password');

generator_button.addEventListener('click', generetePassword);


function generetePassword(){

    const symbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', '_', '=', '{', '}', '[', ']',
                '!', '@', '#', '$', '%', '&', '?', '(', ')', '*', '|'];

    let passwordLength = 8;
    let password_text = [];
    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * symbols.length);
        password_text[i] = symbols[randomNumber];
    }
    password.value = password_text.join('');
    console.log(password_text.join(''));
}

