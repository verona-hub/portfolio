import React from 'react';
import ShowCase from './ShowCase/ShowCase';
import image from '../../img/batman-screenshot.jpg';


const PageThree = () => {

    const info = 'This website was made with Html and CSS.';
    const info2 ='A landing page with parallax and some hover effects.';

    return (
        <div id='page-three-Batman' className='Page page-three'>
            <ShowCase
                title='Batman Fansite'
                image={ image }
                projectLink='https://bat-man.vercel.app/'
                projectInfo={ info }
                projectInfo2={ info2 }
                githubLink='https://github.com/verona-hub/batman'
            />
        </div>
    );
};


export default PageThree;
