import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { createDeck } from './services/fetch-utils';

export default function AddDeckPage() {
  const [nameForm, setNameForm] = useState('');
  const [designerForm, setDesignerForm] = useState('');
  const [copiesForm, setCopiesForm] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    await createDeck({
      name: nameForm,
      designer: designerForm,
      copies: copiesForm
    });

    history.push('/deck-list');
  }
  // console.log('||', nameForm, designerForm, copiesForm);


  return (
    <div>
      <h3>Add a Deck!</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Deck Name'
          required type="text"
          name='deck-name'
          value={nameForm}
          onChange={(e) => setNameForm(e.target.value)}
        />
        <input 
          placeholder='Designer'
          name='designer'
          value={designerForm}
          onChange={(e) => setDesignerForm(e.target.value)}
          required type="text"
        />
        <input
          placeholder='Copies owned'
          required type="text"
          name='copies'
          value={copiesForm}
          onChange={(e) => setCopiesForm(e.target.value)}
        />
        <button>Add Deck</button>
      </form>
    </div>
  );
}
