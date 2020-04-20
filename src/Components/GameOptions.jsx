import React from 'react';
import Players from './Players'
import Pairs from './Pairs'
import Timer from './Timer'

export default function Game(props) {
  return (
    <div>
      <Players />
      <Pairs setPairs={props.setPairs} />
      <Timer />
    </div>
  );
}