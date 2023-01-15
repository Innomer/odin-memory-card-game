import React, { useEffect, useState } from "react";
import './cardDisplay.css';
import blush from './images/blush.png';
import scared from './images/scared.png';
import angry from './images/angry.png';
import cry from './images/cry.png';
import laugh from './images/laugh.png';

function CardDisplay({ setCur, resetCur }) {
    const [reshuffle, setReshuffle] = useState(false);
    const [gameOver,setGameOver]=useState(false);


    let labelArray = ["Blushing", "Scared", "Angry", "Crying", "Laughing"];
    let picArray = [blush, scared, angry, cry, laugh];
    let i = -1;
    let idArray = [];
    let maxIndex = 6;
    while (idArray.length !== maxIndex - 1) {
        let randomIndex = Math.floor(Math.random() * (maxIndex - 1));
        if (idArray.includes(randomIndex) === false) {
            idArray.push(randomIndex);
        }
    }
    useEffect(() => {
        if (reshuffle === true) {
            let maxIndex = 6;
            idArray=[];
            console.log(idArray);
            while (idArray.length !== maxIndex - 1) {
                let randomIndex = Math.floor(Math.random() * (maxIndex - 1));
                if (idArray.includes(randomIndex) === false) {
                    idArray.push(randomIndex);
                }
            }
            setCur();
            setReshuffle(false);
        }
    }, [reshuffle]);

    useEffect(()=>{
        if(gameOver===true){
            resetCur();
        }
    },[gameOver])

    return (
        <div style={{width:"100%",height:"100%"}}>
            <div className="gameOver" style={gameOver?{}:{display:"none"}}>
                <p>Game Over</p>
                <button onClick={()=>{setGameOver(false)}}>Play Again</button>
            </div>
            <div className="cardDisplay" style={gameOver?{display:"none"}:{display:"grid"}}>
            {idArray.map((val) => {
                i++;
                return <Card idNo={idArray[i]} im={picArray[i]} lab={labelArray[i]} res={setReshuffle}  gO={()=>setGameOver(true)}/>
            })}
            </div>
        </div>
    );
}


function Card({ idNo, im, lab, res, gO }) {

    const [chosen, setChosen] = useState(false);
    const [count,setCount]=useState(0);
    useEffect(() => {
        console.log(chosen,count,lab);
        if (chosen === true && count<1) {
            res(true);
            setCount(count+1);
        }
    })

    return (
        <div className="card" style={{gridColumnStart:idNo+1, gridRowStart:1}}>
            <button onClick={() => {
                if (chosen === false ){
                    setChosen(true);
                }
                else {
                    setCount(0);
                    setChosen(false);
                    gO();
                }
            }} draggable="false">
                <img src={im} alt={idNo} draggable="false" />
                <p>{lab}</p>
            </button>
        </div>
    );
}

export default CardDisplay;