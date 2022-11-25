import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
// import App from './App.css';

// import './index.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Home from './screens/Home';
import Search from './screens/Search';
import Booking from './screens/Booking';
import Dashboard from './dashboard/screens/Dashboard';
import Login from './dashboard/screens/Login';
import Stripe from './dashboard/screens/Stripe';
import { Provider } from 'react-redux';
import store from './Redux/store';
const rootElement = document.getElementById("root");



render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      <Route exact path="/searchparkingspaces">
      <Search />
      </Route>
      <Route exact path="/booking" >
      <Booking />
      </Route>
      <Route  path="/dashboard">
      <Dashboard />
      </Route>
      <Route exact path="/login">
      <Login />
      </Route>
      <Route exact path="/payment">
      <Stripe />

      </Route>

  </Switch>
     
   
      {/* <Route path="./components/header/Header" element={<Header />} /> */}
   
  </BrowserRouter>
  </Provider>,
  rootElement
);


