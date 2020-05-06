import React from 'react';

export default function Game(props) {

let numberOfCards = (props.pairs * 2)
let imgArray =[]


function cards(params) {
  for (var i = 0; i < numberOfCards; i++) {
    
    var container = document.getElementById("container");
    container.innerHTML = '<div class="box"></div>';
 }
}

  return (
    <div>
      {props.pairs}
    </div>
  );
}
