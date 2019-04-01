import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../../modules/Auth';


class logoutFunction extends React.Component {

  componentDidMount() {
    // deauthenticate user
    Auth.deauthenticateUser();
    // change the current URL to / after logout
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <p>Logging out...</p>
      </div>
    )
  }
}

logoutFunction.contextTypes = {
  router: PropTypes.object.isRequired
};

export default logoutFunction;
