import React, { useState } from 'react';

export default function AuthPage({ setCurrentUser }) {
  const [emailForm, setEmailForm] = useState('');
  const [passwordFrom, setPassWordForm] = useState('');



  return (
    <div className='auth-page'>
      <h2>Auth Page</h2>
      <form>
        <label>
          Email
          <input 
            required type="email"
            name="-email"
            value={emailForm}
            onChange={(e) => setEmailForm(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
