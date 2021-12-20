import React, { useState } from 'react';


const PageEight = () => {

    const cellElements = [1,2,3,4,5,6,7,8,9];
    const initialBoard = () => {
        {
            return cellElements.map((a, index) => {
                return (
                    <div key={index} id='cell' onClick={ cellClick }> </div>
                )
            })
        }
    };

    // State
    const [startGame, setStartGame] = useState(false);
    const [board, setBoard] = useState(null);
    const [turn, setTurn] = useState('x');
    const [winner, setWinner] = useState(null);

    const errorButton = document.getElementById('error-button');
    const quitButton = document.getElementById('quit');
    const errorMessage = document.querySelector('.error-message');

    // TODO
    // Do you want to play a game ? component appears : null
    // Move everything inside this function
    function initialiseGame() {
        console.log('The game initialised');
        setStartGame(true);
        setBoard(initialBoard);
        setWinner(null);
    }

    const cell = {
        x: { turn: 'x', class: 'x' },
        circle: { turn: 'o', class: 'circle' }
    }

    function cellClick(e) {
        const cells = document.querySelectorAll('#cell');
        const cellsArray = Array.from(cells);
        const currentCell = e.target;
        const currentClass = currentCell.classList;
        const includesEitherClass = currentCell.classList.contains(cell.x.class) || currentCell.classList.contains(cell.circle.class);

        // Place the mark X or O
        placeMark(currentCell, includesEitherClass, cellsArray, currentClass);

    }

    function placeMark(currentCell, includesEitherClass, cellsArray, currentClass) {

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

        // Check if there is a winner
        checkWinner(cellsArray, currentClass);

    }

    function switchTurn() {
        turn === cell.x.turn
            ? setTurn(cell.circle.turn)
            : setTurn(cell.x.turn);
    }

    function hoverShadow() {
        const board = document.querySelector('.board');
        board.classList.remove(cell.x.class);
        board.classList.remove(cell.circle.class);

        turn === cell.x.turn
            ? board.classList.add(cell.circle.class)
            : board.classList.add(cell.x.class);
    }

    function checkWinner(cellsArray, currentClass) {

        let combinations = {
            horizontal: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
            ],
            vertical: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6]
            ]
        };

        currentClass = currentClass[0];

        for(let combination in combinations){
            combinations[combination].forEach(pattern => {
                if(
                    cellsArray[pattern[0]].classList.contains(currentClass) === cellsArray[pattern[1]].classList.contains(currentClass) &&
                    cellsArray[pattern[1]].classList.contains(currentClass) === cellsArray[pattern[2]].classList.contains(currentClass)
                ){
                    // console.log('Equals!')
                    // setWinner(currentClass);
                    // switchTurn();
                    // IF WINNER ?
                    // setBoard(null);
                } else {
                    // console.log('are not equal')
                }

                // if(
                //     cellsArray[pattern[0]] === '' ||
                //     cellsArray[pattern[1]] === '' ||
                //     cellsArray[pattern[2]] === ''
                // ){
                //     // do nothing
                //     console.log('if statement')
                // } else if (
                //     cellsArray[pattern[0]] === cellsArray[pattern[1]] &&
                //     cellsArray[pattern[1]] === cellsArray[pattern[2]]
                // ){
                //     setWinner(cellsArray[pattern[0]]);
                // }
            });
        }
    }

    function showErrorMessage() {
        errorButton.onclick = () => {
            quitButton.addEventListener('click', () => {
                console.log('quit the game');
            });
            errorMessage.classList.toggle('show');
        };
        return errorMessage.classList.toggle('show');
    }

    function quitGame() {
        setStartGame(false);
        setWinner(null);
        setTurn(cell.x.turn);
    }



    return (
        <div id='page-eight-game' className='Page Game page-eight'>
            {
                !startGame ? (
                        <div>
                            <h1> Work in progress... </h1>
                            <h2> Do you want to play a Game? </h2>
                            <button onClick={ initialiseGame }> Yes </button>
                        </div>
                    )
                    :
                    (
                        <div>
                            <h2> Turn: { turn } </h2>
                            <div id='board' className='board x'>
                                { board && initialBoard() }
                            </div>
                            <button id='quit' onClick={ quitGame }> Quit </button>

                            {
                                winner && (
                                    <div className='win-message'>
                                        <h1> { winner } won!!! </h1>
                                        <button id='play-again' onClick={ initialiseGame }> Play again </button>
                                        <button id='reset' onClick={ quitGame }> Quit </button>
                                    </div>
                                )
                            }

                            <div className='error-message'>
                                <h2> This cell is occupied. </h2>
                                <h2> Try a different one. </h2>
                                <button id='error-button'> Continue </button>
                            </div>
                        </div>
                    )
            }
        </div>
    );
};


export default PageEight;