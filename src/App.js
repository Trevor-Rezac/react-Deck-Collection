
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

  // console.log('||', currentUser);

  async function handleLogout() {
    logout();
    setCurrentUser('');
  }


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {currentUser &&
            <ul>
              <Link></Link>
              <Link></Link>
              <button onClick={handleLogout}>Logout</button>
            </ul>
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
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
