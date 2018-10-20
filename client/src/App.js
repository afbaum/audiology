import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import Landing from './components/layout/landing';

import Login from "./components/auth/login";
import Register from "./components/auth/register";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={ Landing } />
          <div className="container">
            <Route exact path="/login" component={ Login } />
            <Route exact path="/register" component={ Register } />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
