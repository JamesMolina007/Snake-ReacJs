import Menu from "./Menu"
import Juego from "./Juego"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Menu/>
          </Route>
          <Route path="/juego">
            <Juego />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
