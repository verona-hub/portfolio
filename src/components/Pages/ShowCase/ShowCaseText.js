import React from 'react';


const ShowCaseText = ({ projectInfo, projectInfo2, githubLink }) => {
    return (
        <div className='box-item ShowCaseText'>
            <div className='ShowCaseText-content-wrapper'>
                <p> { projectInfo } </p>
                <p> { projectInfo2 } </p>
                <p> The source code on &nbsp;
                    <a href={ githubLink } target='_blank' rel='noopener noreferrer' title='Github repository'>
                        Github Repository
                    </a>
                </p>
            </div>
        </div>
    );
};


export default ShowCaseText;
