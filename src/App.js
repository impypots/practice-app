import './App.css';
import React, { useState } from 'react';
import Form from './Form';
import Game from './Game';

function App() {
  const [cardSet, setCardSet] = useState('Kamigawa');
    const [difficulty, setDifficulty] = useState('3');
    const [color, setColor] = useState('black');
    const [cardData, setCardData] = useState();
    const [start, setStart] = useState(false);


  return (
    <div className="App">
     <h1>My React Practice Page</h1>
     <Form cardSet={cardSet} setCardSet={setCardSet} difficulty={difficulty} setDifficulty={setDifficulty}  color={color} setColor={setColor}  cardData={cardData} setCardData={setCardData} start={start} setStart={setStart}/>
     <Game cardData={cardData} start={start}/>
    </div>
  );
}

export default App;
