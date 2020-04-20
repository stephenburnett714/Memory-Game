import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import Home from './Home'
import Game from './Game'
import GameOptions from './GameOptions'


export default function Main() {

    const [pairs, setPairs] = useState(3)
    const [numOfPlayers, setNumOfPlayers] = useState()
    const [players, setPlayers] = useState([])
    const [timer, setTimer] = useState()
    const [turns, setTurns] = useState(1)

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
