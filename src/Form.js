import React, { useState } from 'react';



export default function Form(props) {
    // const [cardSet, setCardSet] = useState('SOI');
    // const [difficulty, setDifficulty] = useState('3');
    // const [color, setColor] = useState('black');
    // const [cardData, setCardData] = useState();
    let url = '';
    let urlsArr = [];
    let namesArr = [];

    function getSettings(e) {
        e.preventDefault();
        url = `https://api.magicthegathering.io/v1/cards?colors=${props.color}&setName=${props.cardSet}&pageSize=${props.difficulty}`;
        getData();
        console.log(url);
    }

    function getData() {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                for(let i = 0; i < data.cards.length; i++) {
                    urlsArr.push(data.cards[i].imageUrl);
                    namesArr.push(data.cards[i].multiverseid);
                }
                props.setCardData(urlsArr);
                props.setNameData(namesArr);
                props.setStart(true);
                // console.log(props.cardData);
                console.log(urlsArr);
                console.log(namesArr);
                // console.log(props.start);

        //Hook here i think.
                
            });
    }

  return (
    <form id="menu-form">
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
            <option value={'Eldritch Moon'}>Eldritch Moon</option>
            <option value={'Amonkhet'}>Amonkhet</option>
            <option value={'Ixalan'}>Ixalan</option>
            <option value={'Neon Dynasty'}>Neon Dynasty</option>
            <option value={'Khans'}>Khans of Tarkir</option>
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
        </form>
  )
}