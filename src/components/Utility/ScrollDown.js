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
        <div className="ScrollDown" >
            <img onClick={ scrollToPageTwo } src={ arrow } alt="scroll down arrow" />
        </div>
    );
};


export default ScrollDown;