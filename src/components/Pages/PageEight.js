import React, { useState } from 'react';


const PageEight = () => {
    const cells = document.querySelectorAll('.cell');
    const xTurn = 'x';
    const oTurn = 'o';

    // State
    const [turn, setTurn] = useState('x');



    function handleClick(e) {
        // xTurn && setTurn('x');
        // oTurn && setTurn('o');
        cells.forEach(cell => {
            cell.addEventListener('click', handleClick, { once: true });
        });

        if (turn === 'x') {
            e.target.classList.add('x');
            setTurn('o');
        } else {
            e.target.classList.add('circle');
            setTurn('x');
        }


        console.log(turn)
        console.log(e.target)
    }

    return (
        <div id='page-eight-Game' className='Page page-eight'>
            <h2> Turn: { turn } </h2>
            <div id='board' className='board x' onClick={ handleClick }>
                <div className='cell'> </div>
                <div className='cell'> </div>
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
