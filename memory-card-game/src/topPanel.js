import React from 'react';

function HeaderPanel({currentScore,highScore,setCur,setHigh,resetCur}){

    if(currentScore>highScore){
        setHigh(currentScore);
    }

    return(
        <div className='headerPanel'>
            <nav>
                <p>Memory Game</p>
                <p>Current Score:- {currentScore}</p>
                <p>High Score:- {highScore}</p>
            </nav>
        </div>
    )
}

export default HeaderPanel;
