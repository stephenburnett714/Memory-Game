import React from 'react';
import { Form, Button} from 'react-bootstrap';

export default function Game(props) {

  function handleChangePairs(event) {
    props.setPairs(event.target.value)
}

  return (
    <div>
        <div>Number of Pairs</div>
<select value={props.pairs} onChange={handleChangePairs}>
  <option selected value="1">1</option>
  <option value="2">2</option>
  <option  value="3">3</option>
  <option value="4">4</option>
</select>
    </div>
  );
}