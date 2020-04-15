import React from 'react';
import {NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <div>
      <NavLink  exact activeClassName="active" to="/" >
      Memory Game
      </NavLink>
      </div>
    </div>
  );
}
