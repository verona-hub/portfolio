import React from 'react';
import ShowCase from './ShowCase/ShowCase';
import image from "../../img/screen-resolution-screenshot.png";


const PageFive = () => {

    const info = 'This website was made with Html, CSS, and Javascript. It shows your screen and viewport height and width in pixels. ' +
                 'By resizing the browser window, the script updates the values. The ruler also displays the current viewport width.';

    return (
        <div id='page-five-ScreenResolution' className='Page page-five'>
            <ShowCase
                title='Screen Resolution'
                image={ image }
                projectLink='https://screen-resolution.vercel.app/'
                projectInfo={ info }
                githubLink='https://github.com/verona-hub/screen-resolution'
            />
        </div>
    );
};


export default PageFive;
