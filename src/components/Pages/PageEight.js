import React, { useState } from 'react';


const PageEight = () => {

    // State
    const [turn, setTurn] = useState('x');

    const cellElements = [1,2,3,4,5,6,7,8,9];

    const errorButton = document.getElementById('error-button');
    const restartButton = document.getElementById('restart-button');
    const errorMessage = document.querySelector('.error-message');

    // TODO
    // Do you want to play a game ? component appears : null
    // Move everything inside this function
    const startGame = () => {
        console.log('The game started');

    };

    const cell = {
        x: { turn: 'x', class: 'x' },
        circle: { turn: 'o', class: 'circle' }
    };

    const cellClick = (e) => {
        const currentCell = e.target;
        const includesEitherClass = currentCell.classList.contains(cell.x.class) || currentCell.classList.contains(cell.circle.class);

        // Place the mark X or O
        placeMark(currentCell, includesEitherClass);
    };

    const placeMark = (currentCell, includesEitherClass) => {

        if (includesEitherClass){
            showErrorMessage();
        } else {
            turn === cell.x.turn
                ? currentCell.classList.add(cell.x.class)
                : currentCell.classList.add(cell.circle.class);
            // Switch Turn
            switchTurn();
            // Start the hover effect
            hoverShadow();
        }
    };

    const switchTurn = () => {
        turn === cell.x.turn
            ? setTurn(cell.circle.turn)
            : setTurn(cell.x.turn);
    };

    const hoverShadow = () => {
        const board = document.querySelector('.board');
        board.classList.remove(cell.x.class);
        board.classList.remove(cell.circle.class);

        turn === cell.x.turn
            ? board.classList.add(cell.circle.class)
            : board.classList.add(cell.x.class);
    };

    const showErrorMessage = () => {
        errorButton.onclick = () => {
            restartButton.addEventListener('click', () => {
                console.log('restart game');
            });
            errorMessage.classList.toggle('show');
        };
        return errorMessage.classList.toggle('show');
    };

    return (
        <div id='page-eight-Game' className='Page Game page-eight'>
            <button onClick={ () => startGame() }> Start the game </button>
            <h2> Turn: { turn } </h2>
            <div id='board' className='board x'>
                {
                    cellElements.map((a, index) => {
                        return (
                            <div key={index} className='cell' onClick={ cellClick }> </div>
                        )
                    })
                }
            </div>

            <div className='restart'>
                <button id="restart-button"> Restart </button>
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