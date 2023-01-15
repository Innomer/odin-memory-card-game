import React from 'react';
import './topPanel.css';
function HeaderPanel({currentScore,highScore,setCur,setHigh,resetCur}){

    if(currentScore>highScore){
        setHigh(currentScore);
    }

    return(
        <div className='headerPanel'>
            <nav>
                <p>Memory Game</p>
                <div className='scoreSec'>
                <p id="cur">Current Score:- {currentScore}</p>
                <p id="high">High Score:- {highScore}</p>
                </div>
            </nav>
        </div>
    )
}

export default HeaderPanel;
