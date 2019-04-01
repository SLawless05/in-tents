
import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Link,
  Redirect, withRouter
} from "react-router-dom";
import search from "./components/pages/search";
import Home from "./components/pages/home/Home.js";
import profile from "./components/pages/profile";
import logoutFunction from './components/logout/logoutFunction.jsx';
import Navbar from "./components/common/Nav/Navbar";
import Footer from "./components/common/Nav/footer";
import Wrapper from "./components/pages/Wrapper";
import about from "./components/pages/about";
import login from "./components/pages/login";
import signup from "./components/pages/signup";
import Auth from './modules/Auth';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Redirect to={{
        pathname: '/profile',
        state: { from: props.location }
      }}/>
    ) : (
      <Component {...props} {...rest} />
    )
  )}/>
)

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
  )}/>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    }
  };

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
    this.forceUpdate();
  }

  render() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper style={{ paddingBottom: 0 }}>
          {/* <Route exact path="/", "Home" component={Home} />
          <Route exact path="/Home" component={Home} /> */}
          <PropsRoute exact path="/" component={Home} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
          <PropsRoute exact path="/Home" component={Home} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
          <PrivateRoute path="/profile" component={profile}/>
          <Route exact path="/search" component={search} />
          <Route exact path="/about" component={about} />
          {/* <Route exact path="/login" component={login} /> */}
          <LoggedOutRoute path="/login" component={login} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
          {/* <Route exact path="/signup" component={signup} /> */}
          <LoggedOutRoute path="/signup" component={signup}/>
          <Route path="/logout" component={logoutFunction}/> 
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
  }
}

export default App;