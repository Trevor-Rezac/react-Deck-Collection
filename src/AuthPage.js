import React, { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function AuthPage({ setCurrentUser }) {
  const [emailForm, setEmailForm] = useState('');
  const [passwordForm, setPasswordForm] = useState('');

  async function handleSignUp(e) {
    e.preventDefault() ;
    const user = await signUp(emailForm, passwordForm);
    setCurrentUser(user);
    setEmailForm('');
    setPasswordForm('');
  }
  // console.log('||', emailForm, passwordForm);

  async function handleSignIn(e) {
    e.preventDefault();
    const user = await signIn(emailForm, passwordForm);
    setCurrentUser(user);
    setEmailForm('');
    setPasswordForm('');
  }


  return (
    <div className='auth-page'>
      <h2>Deck Collection</h2>
      <form onSubmit={handleSignIn}>
        <label>
          Email
          <input 
            required type="email"
            name="email"
            value={emailForm}
            onChange={(e) => setEmailForm(e.target.value)}
          />
        </label>
        <label>
          Password
          <input 
            required type="password"
            name="password"
            value={passwordForm}
            onChange={(e) => setPasswordForm(e.target.value)}
          />
        </label>
        <button onClick={handleSignIn}>Sign In</button>
        <button type='button' onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}