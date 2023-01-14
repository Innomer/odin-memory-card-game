import React, { useEffect, useState } from "react";

function CardDisplay({ setCur, resetCur }) {
    const [reshuffle, setReshuffle] = useState(false);


    let labelArray = ["Hi", "hello", "mello", "nello", "cat"];
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
            while (idArray.length !== maxIndex - 1) {
                let randomIndex = Math.floor(Math.random() * (maxIndex - 1));
                if (idArray.includes(randomIndex) === false) {
                    idArray.push(randomIndex);
                }
            }
            setReshuffle(false);
        }
    }, [reshuffle]);

    return (
        <div className="cardDisplay">
            {idArray.map((val) => {
                return <Card idNo={val} lab={labelArray[val]} res={setReshuffle} />
            })}
        </div>
    );
}


function Card({ idNo, im, lab, res }) {

    const [chosen, setChosen] = useState(false);
    let count=1;

    useEffect(() => {
        if (chosen === true && count<2) {
            res(true);
        }
        if(count>1)
        {
            console.log("Game Over");
        }
    }, [chosen, res,count])

    return (
        <div className="card">
            <button onClick={() => setChosen(true)}>
                <img src={im} alt={idNo} />
                <p>{idNo}-{lab}</p>
            </button>
        </div>
    );
}

export default CardDisplay;