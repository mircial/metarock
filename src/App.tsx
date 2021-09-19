import React from 'react';
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, CreatePage, EvolvePage } from "./pages";
import { Header } from "./components";
// import background from "./bg.jpg";

function App() {
  return (
    <div className={styles.App} >
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/create" component={CreatePage} />
          <Route exact path="/evolve" component={EvolvePage} />
          <Route path='/opensea' component={() => {
            window.location.href = 'https://opensea.io/collection/metarocks'; return null;}}/>
          <Route path='/rarible' component={() => {
            window.location.href = 'https://rarible.com'; return null;}}/>
          <Route path='/etherscan' component={() => {
            window.location.href = 'https://etherscan.io'; return null;}}/>
            
          <Route render={() => <h1>404 not found 页面去火星了 ！</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
