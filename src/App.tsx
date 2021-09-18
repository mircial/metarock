import React from 'react';
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, CreatePage, EvolvePage } from "./pages";
import { Header } from "./components";
// import background from "./bg.jpg";

function App() {
  return (
    <div className={styles.App} style={{ backgroundImage: `url("./bg.jpg")` }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/create" component={CreatePage} />
          <Route exact path="/evolve" component={EvolvePage} />
          <Route render={() => <h1>404 not found 页面去火星了 ！</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
