import React, { useEffect, useState } from 'react';
import { getDecks } from './services/fetch-utils';
import Deck from './Deck';

export default function DeckList() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function fetchDecks() {
      const decks = await getDecks();
      setDecks(decks);
    }
    fetchDecks();
  }, []);

  return (
    <>
      <h3>Deck List</h3>
      <div className='deck-list'>
        {decks.map((deck, i) => <Deck key={`${deck}-${i}`} deck={deck} />)}
      </div>
    </>
  );
}
