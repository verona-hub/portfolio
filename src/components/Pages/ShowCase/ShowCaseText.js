import React from 'react';


const ShowCaseText = ({ projectName, projectInfo, githubLink }) => {
    return (
        <div className='box-item ShowCaseText'>
            <h2> { projectName } </h2>
            <h3> { projectInfo } </h3>
            <h3> The code on &nbsp;
                <a href={ githubLink } target='_blank' rel='noopener noreferrer' title='Github project'>
                    Github
                </a>
            </h3>
        </div>
    );
};


export default ShowCaseText;
