import React from 'react';
import ShowCase from './ShowCase/ShowCase';
import image from "../../img/color-generator-screenshot.png";


const PageSeven = () => {
    return (
        <div id='page-seven-ColorGenerator' className='Page page-seven'>
            <ShowCase
                title='Page 7 - Random Color Generator'
                image={ image }
                projectLink='https://random-color-generators.vercel.app/'
                projectName='Random Color Generator'
                projectInfo='This website was made with Html, CSS, and Javascript.'
                githubLink='https://github.com/verona-hub/random-color-generator'
            />
        </div>
    );
};


export default PageSeven;
