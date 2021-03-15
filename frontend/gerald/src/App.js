import './App.css';
import Home from './components/home/Home'
import { Route, Switch, useHistory } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <div className="app">
          <Home />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
