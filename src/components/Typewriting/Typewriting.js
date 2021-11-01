import React from 'react';
// import TypewritingFunc from './TypewritingFunc';

const texts = ['I am Zoran...', 'I am a junior web developer...'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let finishedText = '';

const Typewriting = () => {
    let header = document.querySelector('.typewriting');

    // If count is equal the array length
    if(count === texts.length) {
        // Reset to zero
        count = 0;
    }
    currentText = texts[count];

    // Increment one character at the time
    letter = currentText.slice(0, ++index);

    if(header) {
        document.querySelector('.typewriting').textContent = letter;
    }
    finishedText = letter;


    if(letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(Typewriting, 700);

    return (
        <h1 className="typewriting"></h1>
    );
};


export default Typewriting;
