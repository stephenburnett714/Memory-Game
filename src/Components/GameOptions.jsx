import React from 'react';
import {Link} from 'react-router-dom'

import CardFront1 from '../Images/CardFronts/CardFront1.png'
import CardFront2 from '../Images/CardFronts/CardFront2.png'
import CardFront3 from '../Images/CardFronts/CardFront3.png'
import CardFront4 from '../Images/CardFronts/CardFront4.png'
import CardFront5 from '../Images/CardFronts/CardFront5.jpg'


export default function Game(props) {


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
      let card = {cardFront:cardFrontArray[i], value:i, flip:false};
      cardsUsedInGame.push(card)
      cardsUsedInGame.push(card)
    }
}

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

//Handle change for pairs
  function handleChangePairs(event) {
    props.setPairs(event.target.value)
}

//Handle change for card back
function handleChangeCardBack(event) {
  props.setCardBack(event.target.value)
}

//Store Data Locally
function cardStorage() {
  createCards()
  let newCards = (shuffleArray(cardsUsedInGame))
  localStorage.setItem('shuffledCardsArray', JSON.stringify(newCards));
}
  return (
    <div>
        <span>Number of Pairs</span>
          <select value={props.pairs} onChange={handleChangePairs}>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option  value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
<br/>
          <span>Card Back</span>
          <select value={props.cardBack} onChange={handleChangeCardBack}>
            <option selected value={0}>Labyrinth</option>
            <option value={1}>Blue Rose</option>
            <option  value={2}>Map</option>
          </select>


<br/>
<button >
<Link  onClick={cardStorage} exact activeClassName="active" to="/game" >
  Start Game
  </Link>
  </button>
    </div>
  );
}