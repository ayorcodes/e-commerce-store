import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddProducts from "./components/AddProducts";
import { ProductsContextProvider } from "./global/ProductsContext";
import { auth, db } from "./config/firebase.config";

import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";

export class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    // getting user info for navigation bar
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("SignedUpUsersData")
          .doc(user.uid)
          .get()
          .then((snapshot) => {
            this.setState({
              user: snapshot.data().Name,
            });
          });
      } else {
        this.setState({
          user: null,
        });
      }
    });
  }

  render() {
    return (
      <ProductsContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/addproducts" component={AddProducts} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </ProductsContextProvider>
    );
  }
}

export default App;
