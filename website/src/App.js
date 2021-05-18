import Articles from "./components/Articles";

import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <header className="App-header container toolbar">
          <nav class="flex-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <Articles />
          </Route>
          <Route exact path="/articles">
            <Articles />
          </Route>
          <Route exact path="/about">
            <h1>hi</h1>
          </Route>
          <Route exact path="/contact">
            <h1>hi</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
