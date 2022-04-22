import React from 'react';

export default function Game(props) {
    let urlArray = new Array(props.cardData);

  return (
    <div>
        <h3>This is the Game Component hi</h3>
        <p>{urlArray}</p>
        <p>{props.start}</p>
        <img src={urlArray[0]} alt="" />
    </div>
  )
}