import React from 'react';
import CardBack1 from '../Images/CardBacks/CardBack1.png'
import CardBack2 from '../Images/CardBacks/CardBack2.png'
import CardBack3 from '../Images/CardBacks/CardBack3.jpg'

import CardFront1 from '../Images/CardFronts/CardFront1.png'
import CardFront2 from '../Images/CardFronts/CardFront2.png'
import CardFront3 from '../Images/CardFronts/CardFront3.png'
import CardFront4 from '../Images/CardFronts/CardFront4.png'
import CardFront5 from '../Images/CardFronts/CardFront5.jpg'


export default function Game(props) {

// Card Backs
  let cardBackArray = [];
  cardBackArray.push(CardBack1) 
  cardBackArray.push(CardBack2)
  cardBackArray.push(CardBack3)
  let cardBack = cardBackArray[props.cardBack]

// Card Fronts Marvel
let cardFrontArray = []
cardFrontArray.push(CardFront1)
cardFrontArray.push(CardFront2)
cardFrontArray.push(CardFront3)
cardFrontArray.push(CardFront4)
cardFrontArray.push(CardFront5)

// An array of 2 cards per pair
let cardsUsedInGame = []
function createCards() {
    for (let i = 0; i < props.pairs; i++) {
      cardsUsedInGame.push(cardFrontArray[i])
      cardsUsedInGame.push(cardFrontArray[i])
    }
}
createCards()


// Suffled Cards
function shuffleArray(array) {
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}
let suffledCards = shuffleArray(cardsUsedInGame)




  return (
    <div>
      {props.pairs}
      <img src={cardBack}></img>
      {suffledCards.map(card => (
        <img src={card}></img>
      ))}
    </div>
  );
}
