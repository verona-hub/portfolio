import React, { useState } from 'react';


const PageEight = () => {

    // State
    const [turn, setTurn] = useState('x');
    const cells = [1,2,3,4,5,6,7,8,9];

    const startGame = (e) => {
        const cell = e.target;
        const errorMessage = document.querySelector('.error-message');
        const errorButton = document.getElementById('error-button');

        const player = {
            x: { turn: 'x', class: 'x' },
            o: { turn: 'o', class: 'circle' },
            includesEitherClass(){
                return cell.classList.contains(this.x.class) || cell.classList.contains(this.o.class);
            },
            errorText: 'The cell is already occupied'
        }

        if (turn === player.x.turn || turn === player.o.turn) {
            if(player.includesEitherClass()){
                errorMessage.classList.toggle('show');

                errorButton.onclick = () => {
                    errorMessage.classList.toggle('show');
                }
            }
            else if (turn === player.x.turn) {
                cell.classList.add(player.x.class);
                setTurn(player.o.turn);
            } else {
                cell.classList.add(player.o.class);
                setTurn(player.x.turn);
            }
        }
    }

    return (
        <div id='page-eight-Game' className='Page Game page-eight'>
            <h2> Turn: { turn } </h2>
            <div id='board' className='board'>
                {
                    cells.map((a, index) => {
                        return (
                            <div key={index} className='cell' onClick={(e) => startGame(e) }> </div>
                        )
                    })
                }
            </div>

            <div className='restart'>
                <button id='restart'> Restart </button>
            </div>

            <div className='win-message'>
                <div><h1> You won!!! </h1></div>
                <button id='win-message'> Reset </button>
            </div>

            <div className='error-message'>
                <h2> This cell is occupied. Try a different one. </h2>
                <button id='error-button'> Click here to continue </button>
            </div>
        </div>
    );
};


export default PageEight;