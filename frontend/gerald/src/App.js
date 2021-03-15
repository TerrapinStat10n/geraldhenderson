import './App.css';
import Home from './components/home/Home'
import { Route, Switch, useHistory } from "react-router-dom";
import Signup from './components/signup/Signup'
import Login from './components/login/Login'

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
    </Switch>
  );
}

export default App;
