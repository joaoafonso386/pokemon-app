import "./App.css";
import PokemonAbout from "./pages/PokemonAbout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div>
        <nav className="Navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <PokemonAbout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
