import React from 'react';
import { Form, Button} from 'react-bootstrap';

export default function Game(props) {

  function handleChange(event) {
    props.setPlayers({value: event.target.value})
}

  return (
    <div>

    </div>
  );
}