import React, { useState } from 'react';


const PageEight = () => {

    // State
    const [turn, setTurn] = useState('x');

    const cellElements = [1,2,3,4,5,6,7,8,9];

    // const cells = document.querySelectorAll('.cell');
    // cells.forEach( cell => {
    //     cell.addEventListener('click', cellClick );
    // });

    // TODO
    // Do you want to play a game ? component appears : null
    // Move everything inside this function
    const startGame = () => {
        console.log('The game started')
    }

    const cellClick = (e) => {
        console.log('cell is active')
        const errorMessage = document.querySelector('.error-message');
        const errorButton = document.getElementById('error-button');

        const cell = {
            x: { turn: 'x', class: 'x' },
            circle: { turn: 'o', class: 'circle' },
            current: e.target,
            includesEitherClass(){
                return this.current.classList.contains(this.x.class) || this.current.classList.contains(this.circle.class);
            },
            toggleErrorMessage(){
                errorButton.onclick = () => {
                    errorMessage.classList.toggle('show');
                };
                return errorMessage.classList.toggle('show')
            }
        }

        const restartButton = document.getElementById('restart-button');
        restartButton.addEventListener('click', () => {
            console.log('restart game')
        });

        placeMark(cell);
        hoverShadow(cell);
    }

    function placeMark(cell){
        console.log(cell.current)
        if (turn === cell.x.turn || turn === cell.circle.turn) {
            if(cell.includesEitherClass()){
                cell.toggleErrorMessage();
            } else {
                if (turn === cell.x.turn) {
                    cell.current.classList.add(cell.x.class);
                    switchTurn();
                } else {
                    cell.current.classList.add(cell.circle.class);
                    switchTurn();
                }
            }
        }
    }

    function switchTurn() {
        if(turn === 'x'){
            setTurn('o');
        } else {
            setTurn('x')
        }
    }

    function hoverShadow(cell){
        const board = document.querySelector('.board');
        board.classList.remove(cell.x.class);
        board.classList.remove(cell.circle.class);

        if(turn === cell.x.turn){
            board.classList.add(cell.circle.class);
        } else {
            board.classList.add(cell.x.class);
        }
    }

    return (
        <div id='page-eight-Game' className='Page Game page-eight'>
            <button onClick={ () => startGame }> Start the game </button>
            <h2> Turn: { turn } </h2>
            <div id='board' className='board'>
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