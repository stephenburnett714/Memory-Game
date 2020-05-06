import React from 'react';
import CardBack1 from '../Images/CardBacks/CardBack1.png'
import CardBack2 from '../Images/CardBacks/CardBack2.png'
import CardBack3 from '../Images/CardBacks/CardBack3.jpg'

export default function Game(props) {


// Card Backs 
  let cardBackArray = [];

  cardBackArray.push(CardBack1) 
  cardBackArray.push(CardBack2)
  cardBackArray.push(CardBack3)

// Card Fronts
let cardFrontArray = []




let numberOfCards = (props.pairs * 2)



  return (
    <div>
      {props.pairs}
      <img src={cardBackArray[2]}></img>
    </div>
  );
}
