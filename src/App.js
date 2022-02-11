
import { useEffect, useState } from 'react';
import { 
  BrowserRouter as Router, 
  Redirect, 
  Route, 
  Switch } from 'react-router-dom';
import './App.css';
import AuthPage from './AuthPage';
import DeckList from './DeckList';
import { getUser } from './services/fetch-utils';


function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    async function fetchUser() {
      const user = await getUser();

      setCurrentUser(user);
    }

    fetchUser();
    
  }, []);
  console.log('||', currentUser);


  return (
    <Router>
      <div className="App">
        <header className="App-header">

        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {currentUser ? <Redirect to="/deck-list" /> : <AuthPage setCurrentUser={setCurrentUser}/>}
            </Route>
            <Route exact path="/deck-list" >
              {currentUser ? <DeckList /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
