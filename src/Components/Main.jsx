import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import Home from './Home'
import Game from './Game'
import GameOptions from './GameOptions'


export default function Main() {

    const [pairs, setPairs] = useState(1)
    const [cardBack, setCardBack] =useState(0)
    const [shuffledCards, setShuffledCards] = useState()

    return (
        <div>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/game">
                <Game 
                />
            </Route>

            <Route exact path="/game-options">
                <GameOptions  shuffledCards={shuffledCards} setShuffledCards={setShuffledCards} pairs={pairs} setPairs={setPairs} cardBack={cardBack} setCardBack={setCardBack}/>
            </Route>
        </div>
    );
}
