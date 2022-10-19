import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.css';

// import './index.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './screens/Home';
import Search from './screens/Search';
import Booking from './screens/Booking';
import Dashboard from './dashboard/screens/Dashboard';
import Login from './dashboard/screens/Login';
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/searchparkingspaces" element={<Search />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
  
     
   
      {/* <Route path="./components/header/Header" element={<Header />} /> */}
   
   


    </Routes>
  </BrowserRouter>,
  rootElement
);


