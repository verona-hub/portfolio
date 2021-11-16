import React from 'react';


const ShowCaseText = ({ projectInfo, githubLink }) => {
    return (
        <div className='box-item ShowCaseText'>
            <p> { projectInfo } </p>
            <p> The source code on &nbsp;
                <a href={ githubLink } target='_blank' rel='noopener noreferrer' title='Github repository'>
                    Github Repository.
                </a>
            </p>
        </div>
    );
};


export default ShowCaseText;
