import './App.css';
import Home from './components/home/Home'
import { Route, Switch, useHistory } from "react-router-dom";
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import Poetry from './components/poetry/Poetry'
import Music from './components/music/Music'
import ShortStories from './components/shortstories/ShortStories'
import Community from './components/community/Community'

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <div className="app">
          <Home />
        </div>
      </Route>
      <Route path="/signup" component={Signup} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/poetry" component={Poetry} exact />
      <Route path="/music" component={Music} exact />
      <Route path="/shortstories" component={ShortStories} exact />
      <Route path="/community" component={Community} exact />
    </Switch>
  );
}

export default App;
