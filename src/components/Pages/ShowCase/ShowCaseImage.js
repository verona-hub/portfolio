import React from 'react';


const ShowCaseImage = ({ projectLink, image }) => {
    return (
        <div className='box-item ShowCaseImage'>
            <a href={ projectLink } target='_blank' rel='noopener noreferrer' title='Click to open the project website in a new tab.'>
                <img src={ image } alt="project image"/>
            </a>
        </div>
    );
};


export default ShowCaseImage;
