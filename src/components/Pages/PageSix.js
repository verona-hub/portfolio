import React from 'react';
import ShowCase from './ShowCase/ShowCase';
import image from "../../img/quote-generator-screenshot.png";


const PageSix = () => {
    return (
        <div id='page-six-QuoteGenerator' className='Page page-six'>
            <ShowCase
                title='Page 6 - Quote Generator'
                image={ image }
                projectLink='https://quote-generator.verona.vercel.app/'
                projectName='Quote Generator'
                projectInfo='This website was made with Html, CSS, and jQuery.'
                githubLink='https://github.com/verona-hub/quote-generator'
            />
        </div>
    );
};


export default PageSix;
