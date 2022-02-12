import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { getSingleDeck } from './services/fetch-utils';

export default function DeckDetail() {
  const [deck, setDeck] = useState({});
  const match = useRouteMatch(); 

  useEffect(() => {
    async function fetchDeckData() {
      const deck = await getSingleDeck(match.params.id);

      setDeck(deck);
    }

    fetchDeckData();

  }, [match]);

  return (
    <div className='deck-detail'>
      <h2>{deck.name}</h2>
      <h2>By: {deck.designer}</h2>
      <h2>Copies owned: {deck.copies}</h2>
      <img src={deck.img_url}/>
    </div>
  );
}
