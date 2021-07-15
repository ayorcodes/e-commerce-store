import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AddProducts from "./components/AddProducts";

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/addproducts" component={AddProducts} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
