import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import Home from './Home'
import Game from './Game'
import GameOptions from './GameOptions'


export default function Main() {

    const [pairs, setPairs] = useState(3)
    console.log(pairs)
    const [numOfPlayers, setNumOfPlayers] = useState()
    const [players, setPlayers] = useState([])
    console.log(players)
    const [timer, setTimer] = useState()
    console.log(timer)

    return (
        <div>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/game">
                <Game pairs={pairs}/>
            </Route>

            <Route exact path="/game-options">
                <GameOptions setPairs={setPairs} setPlayers={setPlayers} setTimer={setTimer} setNumOfPlayers={setNumOfPlayers}/>
            </Route>
        </div>
    );
}
