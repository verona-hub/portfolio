import React from 'react';
import ShowCaseImage from './ShowCaseImage';
import ShowCaseText from './ShowCaseText';


const ShowCase = ({ title, image, projectLink, projectInfo, githubLink }) => {
    return (
        <div className='ShowCase'>

            <h1> { title } </h1>

            <div className='box'>

                <ShowCaseImage
                    projectLink={ projectLink }
                    image={ image }
                />

                <ShowCaseText
                    projectInfo={ projectInfo }
                    githubLink={ githubLink }
                />
            </div>

        </div>
    );
};


export default ShowCase;
