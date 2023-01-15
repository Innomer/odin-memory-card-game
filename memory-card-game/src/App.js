import { useState } from 'react';
import './App.css';
import CardDisplay from './cardDisplay';
import HeaderPanel from './topPanel';

function App() {
  const [currentScore,setCurrentScore]=useState(0);
  const [highScore,setHighScore]=useState(0);
  return (
    <div className='App'>
    <HeaderPanel currentScore={currentScore} highScore={highScore} setCur={()=>{setCurrentScore(currentScore+1)}} setHigh={setHighScore} resetCur={()=>{setCurrentScore(0)}} />
    <CardDisplay setCur={()=>{setCurrentScore(currentScore+1)}} resetCur={()=>{setCurrentScore(0)}} />
    </div>
  );
}



export default App;
