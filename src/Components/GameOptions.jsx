import React from 'react';
import { Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function Game(props) {

  function handleChangePairs(event) {
    props.setPairs(event.target.value)
}

function handleChangeCardBack(event) {
  props.setCardBack(event.target.value)
}

  return (
    <div>
        <span>Number of Pairs</span>
          <select value={props.pairs} onChange={handleChangePairs}>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option  value="3">3</option>
            <option value="4">4</option>
          </select>
<br/>
          <span>Card Back</span>
          <select value={props.cardBack} onChange={handleChangeCardBack}>
            <option selected value={0}>Labyrinth</option>
            <option value={1}>Blue Rose</option>
            <option  value={2}>Map</option>
          </select>


<br/>
<button>
<Link  exact activeClassName="active" to="/game" pairs={props.pairs} cardBack={props.cardBack}>
  Start Game
  </Link>
  </button>
    </div>
  );
}