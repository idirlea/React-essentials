import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import Login from "./login";
import SignUp from "./register";
import Home from "./home";
import Contact from "./contact";
import Profile from "./profile";

import "./styles.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/tutorials">Tutorials</Link>
        <Link to="/login">Login</Link>
        <Link to="/sign-up">Sign up</Link>
      </nav>
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <ProtectedRoute path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
