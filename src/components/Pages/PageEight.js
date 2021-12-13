import React, { useState } from 'react';


const PageEight = () => {

    // State
    const [turn, setTurn] = useState('x');

    const cells = [1,2,3,4,5,6,7,8,9];


    const startGame = (e) => {
        const board = document.querySelector('.board');
        const currentCell = e.target;
        const errorMessage = document.querySelector('.error-message');
        const errorButton = document.getElementById('error-button');

        const cell = {
            x: { turn: 'x', class: 'x' },
            circle: { turn: 'o', class: 'circle' },
            includesEitherClass(){
                return currentCell.classList.contains(this.x.class) || currentCell.classList.contains(this.circle.class);
            },
            toggleErrorMessage(){
                errorButton.onclick = () => {
                    errorMessage.classList.toggle('show');
                };
                return errorMessage.classList.toggle('show')
            }
        }

        if (turn === cell.x.turn || turn === cell.circle.turn) {
            if(cell.includesEitherClass()){
                cell.toggleErrorMessage();
            }
            else if (turn === cell.x.turn) {
                currentCell.classList.add(cell.x.class);
                setTurn(cell.circle.turn);
            } else {
                currentCell.classList.add(cell.circle.class);
                setTurn(cell.x.turn);
            }
        }

        const hoverClass = () => {
            board.classList.remove(cell.x.class);
            board.classList.remove(cell.circle.class);

            if(turn === cell.x.turn){
                board.classList.add(cell.circle.class);
            } else {
                board.classList.add(cell.x.class);
            }
        }
        hoverClass();

        // const resetButton = document.getElementById('reset-button');
        // resetButton.addEventListener('click', event => {
        //     startGame();
        // });

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
                <button id='reset-button'> Restart </button>
            </div>

            <div className='win-message'>
                <div><h1> You won!!! </h1></div>
                <button id='reset-button2'> Reset </button>
            </div>

            <div className='error-message'>
                <h2> This cell is occupied. </h2>
                <h2> Try a different one. </h2>
                <button id='error-button'> Continue </button>
            </div>
        </div>
    );
};


export default PageEight;