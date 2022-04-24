import './App.css';
import React, { useState } from 'react';
import Form from './Form';
import Game from './Game';
import Card from './Card';

function App() {
  const [cardSet, setCardSet] = useState('Eldritch Moon');
    const [difficulty, setDifficulty] = useState(3);
    const [color, setColor] = useState('black');
    const [cardData, setCardData] = useState([]);
    const [nameData, setNameData] = useState([]);
    const [start, setStart] = useState(false);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState('');
    const [prevCard, setPrevCard] = useState('');


  return (
    <div className="App">
     <h1>My React Practice Page</h1>
     <Form cardSet={cardSet} setCardSet={setCardSet} difficulty={difficulty} setDifficulty={setDifficulty}  color={color} setColor={setColor}  cardData={cardData} setCardData={setCardData} nameData={nameData} setNameData={setNameData} start={start} setStart={setStart}/>
     <Game cardData={cardData} start={start} score={score} setScore={setScore} difficulty={difficulty} selected={selected} setSelected={setSelected} prevCard={prevCard} setPrevCard={setPrevCard} nameData={nameData} setNameData={setNameData} />
    </div>
  );
}

export default App;
