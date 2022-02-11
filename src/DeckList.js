import React, { useEffect, useState } from 'react';
import { getDecks } from './services/fetch-utils';

export default function DeckList() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function fetchDecks() {
      const decks = await getDecks();

      setDecks(decks);
    }

    fetchDecks();

  }, []);

  console.log('||', decks);
  return (
    <h3>Deck List</h3>
  );
}
