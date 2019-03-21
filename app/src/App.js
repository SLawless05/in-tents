// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import search from "./pages/search";
import Home from "./components/pages/home/Home.js";
// import profile from "./components/pages/profile";
import Navbar from "./components/common/Nav/Navbar";
import Footer from "./components/common/Nav/footer";
import Wrapper from "./components/pages/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          {/* <Route exact path="/profile" component={profile} /> */}
          {/* <Route exact path="/search" component={search} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;