import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import Home from './Home'
import Game from './Game'
import Pairs from './Pairs'
import Players from './Players'


export default function Main() {

    const [pairs, setPairs] = useState()
    const [players, setPlayers] = useState([])
    const [timer, setTimer] = useState()

    return (
        <div>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/game">
                <Game />
            </Route>

            <Route exact path="/game-options">
                <Pairs />
            </Route>
        </div>
    );
}
