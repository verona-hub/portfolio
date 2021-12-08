import React, { useState } from 'react';


const PageEight = () => {
    // State
    const [turn, setTurn] = useState('x');
    const cells = [1,2,3,4,5,6,7,8,9];

    const startGame = (e) => {
        const board = document.getElementById('board');
        const playerX = 'x';
        const playerXClass = 'x';
        const playerO = 'o';
        const playerOClass = 'circle';
        console.log(playerO)

        const cell = e.target;
        console.log(cell)

        if (turn === 'x') {
            cell.classList.add(playerXClass);
            setTurn(playerO);
        }
        if(turn === 'o') {
            cell.classList.add(playerOClass);
            setTurn(playerX);
        }

    }
    //
    // cells.forEach(cell => {
    //     cell.addEventListener('click', handleClick, { once: true });
    // });
    //     function handleClick(e) {
    //         const cell = e.target;
    //         console.log(cell)
    //
    //         if (turn === 'x') {
    //             cell.classList.add('x');
    //             setTurn(oTurn);
    //             console.log(turn)
    //         }
    //         if(turn === 'o') {
    //             cell.classList.add('circle');
    //             setTurn(xTurn);
    //             console.log(turn)
    //         }
    //
    //         // xTurn && setTurn('x');
    //         // oTurn && setTurn('o');
    //     }
    // }






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
