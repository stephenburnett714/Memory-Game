import React from 'react';
import { Form, Button} from 'react-bootstrap';

export default function Game(props) {
  function handleSubmit() {

    
  }
  return (
    <div>
      <Form onClick={handleSubmit}>
      <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Number of Players</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      <option>13</option>
      <option>14</option>
      <option>15</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="pairsSelect">
    <Form.Label>Number of Pairs</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      <option>13</option>
      <option>14</option>
      <option>15</option>
      <option>16</option>
      <option>17</option>
      <option>18</option>
      <option>19</option>
      <option>20</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="Timer">
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