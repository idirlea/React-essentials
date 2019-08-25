import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import Login from "./login";
import Home from "./home";
import Contact from "./contact";
import Profile from "./profile";

import "./styles.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/contact" component={Contact} />

      <ProtectedRoute path="/profile" component={Profile} />
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
