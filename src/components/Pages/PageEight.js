import React, { useState } from 'react';


const PageEight = () => {

    // State
    const [turn, setTurn] = useState('x');
    const cells = [1,2,3,4,5,6,7,8,9];

    const startGame = (e) => {
        const cell = e.target;

        const player = {
            xTurn: 'x',
            xClass: 'x',
            oTurn: 'o',
            oClass: 'circle',
            includesEitherClass(){
                return cell.classList.contains(this.xClass) || cell.classList.contains(this.oClass);
            },
            errorText: 'The cell is already occupied'
        }

        if (turn === player.xTurn || turn === player.oTurn) {
            if(player.includesEitherClass()){
                alert(player.errorText);
            }
            else if (turn === player.xTurn) {
                cell.classList.add(player.xClass);
                setTurn(player.oTurn);
            } else {
                cell.classList.add(player.oClass);
                setTurn(player.xTurn);
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
                <div>
                    <h1> You won!!! </h1>
                </div>
                <button id='reset' className='button-reset'> Reset </button>
            </div>
        </div>
    );
};


export default PageEight;