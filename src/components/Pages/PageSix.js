import React from 'react';
import ShowCase from './ShowCase/ShowCase';
import image from "../../img/quote-generator-screenshot.jpg";


const PageSix = () => {

    const info = 'This website was made with Html, CSS, and jQuery.';
    const info2 = 'A random quote is displayed on button click or spacebar/enter keypress. On each shuffle, the background image is also changed.';

    return (
        <div id='page-six-quote-generator' className='Page page-six'>
            <ShowCase
                title='Quote Generator'
                image={ image }
                projectLink='https://quote-generator.verona.vercel.app/'
                projectInfo={ info }
                projectInfo2={ info2 }
                githubLink='https://github.com/verona-hub/quote-generator'
            />
        </div>
    );
};


export default PageSix;
