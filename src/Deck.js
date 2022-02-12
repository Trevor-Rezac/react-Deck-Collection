import React from 'react';
import { Link } from 'react-router-dom';

export default function Deck({ deck }) {
  return (
    <Link to={`/deck-list/${deck.id}`}>
      <div className='deck'>
        <h3>{deck.name}</h3>
        <p>By: {deck.designer}</p>
      </div>
    </Link>
  );
}
