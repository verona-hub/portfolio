import React from 'react';
import ShowCase from './ShowCase/ShowCase';
import image from "../../img/color-generator-screenshot.png";


const PageSeven = () => {

    const info = 'This website was made with Html, CSS, and Javascript.';
    const info2 = 'It generates a random color, displays the hex and rgb values, and changes the background color accordingly. ' +
                  'If clicked on the hex or rgb box, the value will be copied to the clipboard.';

    return (
        <div id='page-seven-ColorGenerator' className='Page page-seven'>
            <ShowCase
                title='Random Color Generator'
                image={ image }
                projectLink='https://random-color-generators.vercel.app/'
                projectInfo={ info }
                projectInfo2={ info2 }
                githubLink='https://github.com/verona-hub/random-color-generator'
            />
        </div>
    );
};


export default PageSeven;
