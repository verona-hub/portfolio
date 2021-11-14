import React from 'react';
import ShowCase from './ShowCase/ShowCase';
import image from "../../img/screen-resolution-screenshot.png";


const PageFive = () => {
    return (
        <div id='page-five-ScreenResolution' className='Page page-five'>
            <ShowCase
                title='Page 5 - Screen Resolution'
                image={ image }
                projectLink='https://screen-resolution.vercel.app/'
                projectName='Screen Resolution'
                projectInfo='This website was made with Html, CSS, and Javascript.'
                githubLink='https://github.com/verona-hub/screen-resolution'
            />
        </div>
    );
};


export default PageFive;
