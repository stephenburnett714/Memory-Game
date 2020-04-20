import React from 'react';
import { Form } from 'react-bootstrap';

export default function Players() {
  return (
    <div>
      <Form>
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
      </Form>
    </div>
  );
}
