import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { createDeck } from './services/fetch-utils';

export default function AddDeckPage() {
  const [nameForm, setNameForm] = useState('');
  const [designerForm, setDesignerForm] = useState('');
  const [copiesForm, setCopiesForm] = useState(1);
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
        <label>
          Deck Name
          <input 
            required type="text"
            name='deck-name'
            value={nameForm}
            onChange={(e) => setNameForm(e.target.value)}
          />
        </label>
        <label>
          Designer
          <input 
            name='designer'
            value={designerForm}
            onChange={(e) => setDesignerForm(e.target.value)}
            required type="text"
          />
        </label>
        <label>
          Copies owned
          <input 
            required type="text"
            name='copies'
            value={copiesForm}
            onChange={(e) => setCopiesForm(e.target.value)}
          />
        </label>
        <button>Add Deck</button>
      </form>
    </div>
  );
}
