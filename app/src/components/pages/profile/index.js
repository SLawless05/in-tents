import React, { useState } from "react";
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { createMuiTheme } from '@material-ui/core/styles';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../../../modules/Auth';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import App from '../../../App';

const UserData = ({ savedParks, user }) => (
  <MuiThemeProvider>
  <Card className="container">
    <CardTitle
      title="User"
      subtitle="Here is your Favorite Parks"
    />
  {savedParks && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{savedParks}</CardText>}
  </Card>
  </MuiThemeProvider>
);

UserData.propTypes = {
  savedParks: PropTypes.string.isRequired
};

class profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      savedParks: '',
      user: ''
    };
  }

  componentDidMount() => {
      let tempMail = Auth.getEmail();

      axios.post('/api/users/profile/favorites', {

          email: tempMail
        
        }).then(function (response) {
        console.log(response.title);
        console.log(response.message);

        this.setState({
          savedParks: response.message,
          user: response.title
        });
        
        this.forceUpdate();

        }).catch(function (error) {

        console.log(error);

      });

    // const xhr = new XMLHttpRequest();
    // xhr.open('get', '/api/users/profile/favorites');
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // // set the authorization HTTP header
    // xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    // xhr.responseType = 'json';
    // xhr.addEventListener('load', () => {
    //   if (xhr.status === 200) {
    //     console.log(xhr.response);
    //     this.setState({
    //       savedParks: xhr.response.message,
    //       user: xhr.response.user
    //     });
    //   }
    // });
    // xhr.send();
  }

render() {
  return (
    <div>
      <div
        className="bgimg-1 w3-display-container"
        id="home"
        style={{
          backgroundImage:
            "url('https://media.blogto.com/articles/2017725-lake-superior.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70')",
          minHeight: "100vh",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
      <div
          className="w3-content w3-container w3-padding-64"
          id="portfolio"
          style={{ backgroundColor: "rbga(255, 255, 255, 0.5)" }}
      >
      <div>
            <h1
              style={{
                textAlign: "center",
                display: "block",
                fontFamily: "Sorts Mill Goudy",
                fontSize: "55px"
              }}
            >
              Profile
            </h1>
            <div><a href={"/logout"}>
            <button
            className="w3-button w3-padding-large w3-black"
            style={{ opacity: "0.6", fontFamily: "Sorts Mill Goudy"}}
            >
            Logout
            </button></a></div>
            <div>
            <h3>
            Favorite Parks

            <UserData savedParks={this.state.savedParks} user={this.state.user} />

            </h3>
            <Typography component="p">
                To Search for parks to add to favorites:
            </Typography>
            <div><a href={"/search"}>
            <button
            className="w3-button w3-padding-large w3-black"
            style={{ opacity: "0.6", fontFamily: "Sorts Mill Goudy"}}
            >
            Click Here!
            </button></a></div>
            </div>
            <div id="favorites-div">
            </div>
      </div>
      </div>
      </div>
    </div>

  );
  }
}


export default (profile);



