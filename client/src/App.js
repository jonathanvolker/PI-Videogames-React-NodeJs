import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home'
import Nav from './components/Nav'
import Videogame from './components/Videogame'
import CreateGame from './components/CreateGame'
import Intro from './components/Intro'
import About from './components/About'
import GameCreated from './components/GameCreated';


function App() {
  return (
  <>
   

    <Route exact path='/about' component={About} /> 
    <Route exact path="/home" component={Home} />
    <Route exact path="/videogames/:id" component={Videogame} />
    <Route exact path="/createyourgame" component={CreateGame} />
    <Route exact path="/gamecreated" component={GameCreated} />
    <Route exact path='/' component={Intro} />

  </>
  );
}

export default App;