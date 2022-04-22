import React, { useState } from 'react';



export default function Form(props) {
    // const [cardSet, setCardSet] = useState('Kamigawa');
    // const [difficulty, setDifficulty] = useState('3');
    // const [color, setColor] = useState('black');
    // const [cardData, setCardData] = useState();
    let url = '';
    let urlsArr = [];

    function getSettings(e) {
        e.preventDefault();
        alert(props.color + props.difficulty + props.cardSet);
        url = `https://api.magicthegathering.io/v1/cards?colors=${props.color}&setName=${props.cardSet}&pageSize=${props.difficulty}`;
        alert(url);
        getData();
    }

    function getData() {
        alert("getting data lmaoooo");
        fetch(url)
            .then(response => response.json())
            .then(data => {
                for(let i = 0; i < data.cards.length; i++) {
                    urlsArr.push(data.cards[i].imageUrl);
                }
                props.setCardData(urlsArr);
                props.setStart(!props.start);
                console.log(props.cardData);
                console.log(urlsArr);
                console.log(props.start);

        //Hook here i think.
                
            });
    }

  return (
    <form id="menu-form">
          <label htmlFor="">Title:</label>
          <input type="text" /><br></br>
          <label htmlFor="number-select">Difficulty: </label>
          <select 
            name="number-select" 
            id="number-select" 
            value={props.difficulty}
            onChange={(e) => props.setDifficulty(e.target.value)}
          >
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={6}>6</option>
          </select>
          <br />
          <label htmlFor="set-select">Set: </label>
          <select name="set-select" id="set-select" value={props.cardSet} onChange={(e) => props.setCardSet(e.target.value)} >
            <option value={'Origins'}>Origins</option>
            <option value={'Amonkhet'}>Amonkhet</option>
            <option value={'Kamigawa'}>Kamigawa</option>
            <option value={'Khans'}>Khans</option>
          </select>
          <br />
          <label htmlFor="color-select">Color: </label>
          <select name="color-select" id="color-select" value={props.color} onChange={(e) => props.setColor(e.target.value)}>
            <option value={'Black'}>black</option>
            <option value={'Blue'}>Blue</option>
            <option value={'Green'}>Green</option>
            <option value={'White'}>White</option>
            <option value={'Red'}>Red</option>
          </select><br></br>
          <button id="menu-submit" onClick={(e) => getSettings(e)}>Start</button><br></br>
          <p>{props.cardData}</p>
        </form>
  )
}