import React from 'react';

import CardBack1 from '../Images/CardBacks/CardBack1.png'
import CardBack2 from '../Images/CardBacks/CardBack2.png'
import CardBack3 from '../Images/CardBacks/CardBack3.jpg'





export default function Game(props) {

  let shuffledCardsArray = JSON.parse(localStorage.getItem("shuffledCardsArray"))
  console.log(shuffledCardsArray)
  let cardBackNumber = JSON.parse(localStorage.getItem("cardBack"))

  
// Card Backs
  let cardBackArray = [];
  cardBackArray.push(CardBack1) 
  cardBackArray.push(CardBack2)
  cardBackArray.push(CardBack3)
  let cardBack = cardBackArray[cardBackNumber]
console.log(cardBack)

// Flip function
  function flip(value) {
    value =!value
  }

  return (
    <div>
  <div> 
  {shuffledCardsArray.map((card,index) => (
  <div key={index}>
    <div>
      {console.log(cardBack)}
      {card.flip ? <div onclick={flip(card.flip)}>
        <img  className='card-front' src={card.cardFront} alt='Card Front'></img>
      </div>
      :
      <div onclick={flip(card.flip)}>
      <img  className='card-back' src={cardBack}  alt='Card Back'></img>
    </div>
      }
   

    </div>
  </div>
    ))}
</div>
    </div>
  );
}
