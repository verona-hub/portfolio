import React from 'react';
import ShowCaseImage from './ShowCaseImage';
import ShowCaseText from './ShowCaseText';


const ShowCase = ({ title, image, projectLink, projectName, projectInfo, githubLink }) => {
    return (
        <div className='ShowCase'>

            <h1> { title } </h1>

            <div className='box'>

                <ShowCaseImage
                    projectLink={ projectLink }
                    image={ image }
                />

                <ShowCaseText
                    projectName={ projectName }
                    projectInfo={ projectInfo }
                    githubLink={ githubLink }
                />
            </div>

        </div>
    );
};


export default ShowCase;
