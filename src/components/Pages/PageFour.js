import React from 'react';
import ShowCase from './ShowCase/ShowCase';
import image from "../../img/todo-list-screenshot.png";


const PageFour = () => {

    const info = 'This website was made with Html, CSS, and jQuery.';
    const info2 = 'A todo list with options to modify, mark as completed, or delete a task.';

    return (
        <div id='page-four-TodoList' className='Page page-four'>
            <ShowCase
                title='Todo List'
                image={ image }
                projectLink='https://simple-todo-list.vercel.app/'
                projectInfo={ info }
                projectInfo2={ info2 }
                githubLink='https://github.com/verona-hub/to-do-list'
            />
        </div>
    );
};


export default PageFour;
