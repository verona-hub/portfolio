
const headerTexts = ['Welcome to my portfolio page.', 'I am Zoran.', 'I am a junior web developer.'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';


const TypewritingFunc = () => {

    let header = document.querySelector('.typewriting');

    // If count reaches the array length
    if(count === headerTexts.length) {
        // Reset to zero
        count = 0;
    }
    currentText = headerTexts[count];

    // Increment one character at the time
    letter = currentText.slice(0, ++index);

    // DO NOT REMOVE IF STATEMENT!
    // TypeError: can't access property "textContent", header is null
    if(header) {
        header.textContent = letter;
    }

    if(letter.length === currentText.length) {
        count++;
        index = 0;
    }

    setTimeout(TypewritingFunc, 400);
}


export default TypewritingFunc;
