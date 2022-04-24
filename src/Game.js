import React, {useEffect} from 'react';
import Card from './Card';

export default function Game(props) {
    let completeArray = [];
    for(let i = 0; i < props.cardData.length; i++) {
        completeArray.push([props.cardData[i], props.nameData[i]])
    }
    let urlArray = [...completeArray, ...completeArray];

    function arrayShuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    useEffect(() => {
       if(props.score >= props.difficulty) {
            alert("Wow, you won!!!!")
       }
    }, [props.score])

    

    useEffect(() => {
        arrayShuffle(urlArray);
    }, []);

  return (
    <div id="game">
        <p>Score: {props.score}</p>
        <p>Card Selected ID: {props.selected}</p>
        {/* <p>{props.start == true ? "true" : "false"}</p> */}
        <div id="board">{urlArray.map((card, index) => {
            if(props.start){
               // return <img src={card} key={index} onClick={() => props.setScore(props.score + 1)} alt="" />
               return <Card srcFront={card[0]} cardId={card[1]} score={props.score} key={index.toString()}  setScore={props.setScore} setSelected={props.setSelected} nameData={props.nameData} setNameData={props.setNameData} selected={props.selected} prevCard={props.prevCard} setPrevCard={props.setPrevCard} />
            }
        })}</div>
    </div>
  )
}