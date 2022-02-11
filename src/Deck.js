import React from 'react';

export default function Deck({ deck }) {
  return (
    <div className='deck'>
      <h3>{deck.name}</h3>
      <p>By: {deck.designer}</p>
    </div>
  );
}
