import React, { useState } from 'react';


const PageEight = () => {
    // State
    const [turn, setTurn] = useState('x');
    const cells = [1,2,3,4,5,6,7,8,9];

    const startGame = (e) => {
        const board = document.getElementById('board');
        const cell = e.target;

        const player_X = 'x';
        const player_X_class = 'x';
        const player_O = 'o';
        const player_O_class = 'circle';


        if (turn === 'x') {
            if(cell.classList.contains(player_X_class)){
                console.log('already contains X')
            }
            else if (cell.classList.contains(player_O_class)) {
                console.log('already contains Circle')
            } else {
                cell.classList.add(player_X_class);
                setTurn(player_O);
            }

        }
        else {
            if (cell.classList.contains(player_O_class)){
                console.log('already contains Circle');
            }
            else if(cell.classList.contains(player_X_class)){
                console.log('already contains X')
            }
            else {
                cell.classList.add(player_O_class);
                setTurn(player_X);
            }

        }

    }
    //
    // cells.forEach(cell => {
    //     cell.addEventListener('click', handleClick, { once: true });
    // });


    return (
        <div id='page-eight-Game' className='Page Game page-eight'>
            <h2> Turn: { turn } </h2>
            {/*<div className='start-game'>*/}
            {/*    <button onClick={ startGame }> Start Game </button>*/}
            {/*</div>*/}
            <div id='board' className='board'>
                {
                    cells.map((a, index) => {
                        return (
                            <div key={index} className='cell' onClick={(e) => startGame(e) }> </div>
                        )
                    })
                }
                {/*<div className='cell'> </div>*/}
                {/*<div className='cell'> </div>*/}
                {/*<div className='cell'> </div>*/}
                {/*<div className='cell'> </div>*/}
                {/*<div className='cell'> </div>*/}
                {/*<div className='cell'> </div>*/}
                {/*<div className='cell'> </div>*/}
                {/*<div className='cell'> </div>*/}
                {/*<div className='cell'> </div>*/}
            </div>

            <div className='restart'>
                <button id='restart'> Restart </button>
            </div>

            <div className='win-message'>
                <div>
                    <h1> You won!!! </h1>
                </div>
                <button id='reset' className='button-reset'> Reset </button>
            </div>
        </div>
    );
};


export default PageEight;