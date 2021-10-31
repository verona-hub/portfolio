import React from 'react';


const TypewritingFunc = () => {
    let header = document.querySelector('.typewriting');

    const texts = ['I am Zoran.', 'I am a junior web developer'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type () {
        // If count is equal the array length
        if(count === texts.length) {
            // Reset to zero
            count = 0;
        }
        currentText = texts[count];

        // Increment one character at the time
        letter = currentText.slice(0, ++index);

        // document.querySelector('.typewriting').textContent = letter;
        // header.textContent = letter;

        if(letter.length === currentText.length) {
            count++;
            index = 0;
        }
        setTimeout(type, 400);
    }());

    // console.log(header.textContent)

    // window.onload = function(e){
    //     console.log(e)
    // }

    return (
        <h1 className="typewriting"> Hello </h1>
    );
}



export default TypewritingFunc;
