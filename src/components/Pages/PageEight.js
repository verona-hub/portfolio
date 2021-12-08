import React from 'react';


const PageEight = () => {

    return (
        <div id='page-eight-Game' className='Page page-eight'>
            <div id='board' className='board x'>
                <div className='cell x'> </div>
                <div className='cell circle'> </div>
                <div className='cell'> </div>
                <div className='cell'> </div>
                <div className='cell'> </div>
                <div className='cell'> </div>
                <div className='cell'> </div>
                <div className='cell'> </div>
                <div className='cell'> </div>
            </div>
            <div className='win-message'>
                <div>
                    <h1> You won!!! </h1>
                </div>
                <button id='reset'> Reset </button>
            </div>
        </div>
    );
};


export default PageEight;
