import React, {useState, useEffect} from 'react';
import ReactCardFlip from 'react-card-flip';
import CardBack1 from '../Images/CardBacks/CardBack1.png'
import CardBack2 from '../Images/CardBacks/CardBack2.png'
import CardBack3 from '../Images/CardBacks/CardBack3.jpg'



export default function Game(props) {

  let shuffledCardsArray = JSON.parse(localStorage.getItem("shuffledCardsArray"))



  
// Card Backs
  let cardBackArray = [];
  cardBackArray.push(CardBack1) 
  cardBackArray.push(CardBack2)
  cardBackArray.push(CardBack3)
  let cardBack = cardBackArray[props.cardBack]



  return (
    <div>
  <div> 
  {shuffledCardsArray.map((card,index) => (
  <div key={index}>
    <div onclick={flip()}>
      
      <div>
        <img className='card-front' src={card.cardFront} alt='Card Front'></img>
      </div>

      <div>
        <img className='card-back' src={cardBack} onClick={handleClick} alt='Card Back'></img>
      </div>

    </div>
  </div>
    ))}
</div>
    </div>
  );
}
