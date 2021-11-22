import React from 'react';
import ShowCaseImage from './ShowCaseImage';
import ShowCaseText from './ShowCaseText';


const ShowCase = ({ title, image, projectLink, projectInfo, projectInfo2, githubLink }) => {
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
                    projectInfo2={ projectInfo2 }
                    githubLink={ githubLink }
                />
            </div>

        </div>
    );
};


export default ShowCase;
