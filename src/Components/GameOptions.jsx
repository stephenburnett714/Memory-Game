import React from 'react';
import { Form, Button} from 'react-bootstrap';

export default function Game(props) {

  function handleSubmit() {
    props.setPlayers(this.playerSelect.value)
}

  return (
    <div>

      <Form onClick={handleSubmit}>
      <Form.Group controlId="playerSelect">
    <Form.Label>Number of Players</Form.Label>
    <Form.Control  as="select">
      <option value="1" >1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="3">4</option>
      <option value="3">5</option>
      <option value="3">6</option>
      <option value="3">7</option>
      <option value="3">8</option>
      <option value="3">9</option>
      <option value="3">10</option>
      <option value="3">11</option>
      <option value="3">12</option>
      <option value="3">13</option>
      <option value="3">14</option>
      <option value="3">15</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="pairSelect">
    <Form.Label>Number of Pairs</Form.Label>
    <Form.Control as="select">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="1">6</option>
      <option value="1">7</option>
      <option value="1">8</option>
      <option value="1">9</option>
      <option value="1">10</option>
      <option value="1">11</option>
      <option value="1">12</option>
      <option value="1">13</option>
      <option value="1">14</option>
      <option value="1">15</option>
      <option value="1">16</option>
      <option value="1">17</option>
      <option value="1">18</option>
      <option value="1">19</option>
      <option value="1">20</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="timerSelect">
    <Form.Label>Seconds Per Turn</Form.Label>
    <Form.Control as="select">
      <option>None</option>
      <option>30</option>
      <option>60</option>
      <option>120</option>
    </Form.Control>
  </Form.Group>




  <Button type="submit" onSubmit={handleSubmit}>Play Game</Button>
      </Form>
    </div>
  );
}