import React from 'react';
import arrow from '../../img/down-arrow.png';


const ScrollDown = () => {

    const scrollToPageTwo = () => {
        document
            .querySelector('.page-two')
            .scrollIntoView({
                behavior: 'smooth'
            });
    }

    return (
        <div className="ScrollDown">
            <div className='image-wrapper' onClick={ scrollToPageTwo }>
                <img src={ arrow } alt="scroll down arrow"/>
            </div>
        </div>
    );
};


export default ScrollDown;