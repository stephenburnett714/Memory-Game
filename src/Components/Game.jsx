import React from 'react';
import CardBack1 from '../Images/CardBacks/CardBack1.png'
import CardBack2 from '../Images/CardBacks/CardBack2.png'
import CardBack3 from '../Images/CardBacks/CardBack3.jpg'

export default function Game(props) {

  let cardBackArray = [];

  cardBackArray.push(CardBack1) 
  cardBackArray.push(CardBack2)
  cardBackArray.push(CardBack3)
console.log(props.cardBack)


// Card Fronts
let cardFrontArray = []

cardFrontArray.push()

let cardBack = cardBackArray[props.cardBack]


  return (
    <div>
      {props.pairs}
      <img src={cardBack}></img>
    </div>
  );
}
