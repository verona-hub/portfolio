import React from 'react';
import ShowCase from './ShowCase/ShowCase';
import image from '../../img/batman-screenshot.jpg';


const PageThree = () => {
    return (
        <div id='page-three-Batman' className='Page page-three'>
            <ShowCase
                title='Page 3 - Batman Fansite'
                image={ image }
                projectLink='https://bat-man.vercel.app/'
                projectName='Batman Fansite'
                projectInfo='This website was made with Html and CSS.'
                githubLink='https://github.com/verona-hub/batman'
            />
        </div>
    );
};


export default PageThree;
