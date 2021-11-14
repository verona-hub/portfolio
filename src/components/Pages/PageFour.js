import React from 'react';
import ShowCase from './ShowCase/ShowCase';
import image from "../../img/todo-list-screenshot.png";


const PageFour = () => {
    return (
        <div id='page-four' className='Page page-four'>
            <ShowCase
                title='Page 4 - Todo List'
                image={ image }
                projectLink='https://simple-todo-list.vercel.app/'
                projectName='Weather App'
                projectInfo='This app was made with ReactJS.'
                githubLink='https://github.com/verona-hub/to-do-list'
            />
        </div>
    );
};


export default PageFour;
