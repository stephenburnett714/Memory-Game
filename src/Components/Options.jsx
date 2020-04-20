import React from 'react';
import { Link } from 'react-router-dom'

export default function Home(props) {
  return (
    <div>
      <Link  exact activeClassName="active" to="/game-options" >
          New Game
      </Link>
    </div>
  );
}