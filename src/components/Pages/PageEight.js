import React, { useState } from 'react';


const PageEight = () => {
    // State
    const [turn, setTurn] = useState('x');
    const cells = [1,2,3,4,5,6,7,8,9];

    const startGame = (e) => {
        const board = document.getElementById('board');
        const cell = e.target;

        const player = {
            x: {
                turn: 'x',
                class: 'x'
            },
            o: {
                turn: 'o',
                class: 'circle'
            },
            error: {
                text: 'The cell is already occupied'
            }
        }

        const includesEitherClass = cell.classList.contains(player.x.class) || cell.classList.contains(player.o.class);

        if (turn === player.x.turn) {
            if(includesEitherClass){
                alert(player.error.text)
            }
            else {
                cell.classList.add(player.x.class);
                setTurn(player.o.turn);
            }

        }
        if (turn === player.o.turn) {
            if (includesEitherClass){
                alert(player.error.text);
            }
            else {
                cell.classList.add(player.o.class);
                setTurn(player.x.turn);
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