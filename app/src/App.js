
import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Link,
  Redirect,
} from "react-router-dom";
import search from "./components/pages/search";
import Home from "./components/pages/home/Home.js";
import profile from "./components/pages/profile";
import Navbar from "./components/common/Nav/Navbar";
import Footer from "./components/common/Nav/footer";
import Wrapper from "./components/pages/Wrapper";
import about from "./components/pages/about";
import login from "./components/pages/login";
import signup from "./components/pages/signup";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper style={{ paddingBottom: 0 }}>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/profile" component={profile} />
          <Route exact path="/search" component={search} />
          <Route exact path="/about" component={about} />
          <Route exact path="/login" component={login} />
          <Route exact path="/signup" component={signup} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;