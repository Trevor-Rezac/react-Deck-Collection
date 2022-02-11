
import { useEffect, useState } from 'react';
import { 
  BrowserRouter as Router, 
  Redirect, 
  Route, 
  Switch,
  Link
} from 'react-router-dom';
import './App.css';
import AuthPage from './AuthPage';
import DeckList from './DeckList';
import AddDeckPage from './AddDeckPage';
import { getUser, logout } from './services/fetch-utils';


function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    async function fetchUser() {
      const user = await getUser();

      setCurrentUser(user);
    }

    fetchUser();
    
  }, []);

  async function handleLogout() {
    logout();
    setCurrentUser('');
  }


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {currentUser &&
            <div className='nav-links'>
              <Link to="/add-deck">Add a Deck</Link>
              <Link to="/deck-list">Deck List</Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          }
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {currentUser ? <Redirect to="/deck-list" /> : <AuthPage setCurrentUser={setCurrentUser}/>}
            </Route>
            <Route exact path="/deck-list" >
              {currentUser ? <DeckList /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/add-deck" >
              {currentUser ? <AddDeckPage /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
