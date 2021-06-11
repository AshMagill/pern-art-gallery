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
            <h1>Tylar Waterman About</h1>
            <div className="container">
              <div className="circle"></div>
              <p className="text">
                Elit corporis aspernatur dolor recusandae dicta! Corporis eaque
                et pariatur ea voluptatibus. Dolorum nesciunt sapiente dolorem
                eos consequatur reiciendis unde Quas aut non pariatur ut dolorum
                Eaque facilis libero placeat aut deserunt? Quasi mollitia nemo
                odio id hic Doloremque incidunt odit blanditiis voluptatum nisi.
                Optio repellendus dolores minima quod
              </p>
            </div>
          </Route>
          <Route exact path="/contact">
            <h1>Tylar Waterman Contact</h1>
            <div class="container">
              <p class="text">
                Lorem elit accusamus natus iusto nulla! Id delectus soluta non
                quasi velit. Optio minus minima maxime velit ab? Facere iusto
                itaque corporis laborum fuga Nulla qui praesentium vitae fugiat
                inventore Quo perspiciatis repellendus mollitia rem animi. Non
                maxime adipisci voluptatem.
              </p>
            </div>
          </Route>
        </Switch>
        <div class="footer">
          <div className="insta-logo"></div>
          <div className="youtube-logo"></div>
        </div>
      </div>
    </Router>
  );
};

export default App;
