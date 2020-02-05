import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Homepage, ShopPage } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
