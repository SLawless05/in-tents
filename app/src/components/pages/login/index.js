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

import axios from 'axios';
import Auth from '../../../modules/Auth';
//

import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { withRouter } from "react-router";

const newPalette = createMuiTheme({
  palette: {
    primary: {
      main: "#ea7b12",
    },
    secondary: {
      main: "#391356",
    },
  },
});

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});


class LogIn extends React.Component {
  constructor(props, context) {
    super(props, context);

    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }

    this.state = {
      errors: {},
      successMessage,
      user: {
        email: '',
        password: ''
      }
    };

    this.changeUser = this.changeUser.bind(this);
  }

  // const { classes } = props;

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  render() {

  const { classes } = this.props;
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
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  placeholder="burrito@taco.com"
                  className="input"
                  name="email"
                  value={this.state.user.email}
                  onChange={this.changeUser}
                  type="text"
                  autoComplete="email"
                  autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  placeholder="Top Secret"
                  className="input"
                  name="password"
                  value={this.state.user.password}
                  onChange={this.changeUser}
                  type="password"
                  id="password"
                  autoComplete="current-password" />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={(e) => {
                  e.preventDefault();
                  if (this.state.user.email !== "" && this.state.user.password !== "") {
                    let tempmail = this.state.user.email;
                    console.log(tempmail);
                    axios.post('/api/users/signin', {
                      email: this.state.user.email,
                      password: this.state.user.password
                    }).then(function (response) {
                    console.log(response.data.token);

                    //this.state.user.email="";
                    //this.state.user.password="";

                    Auth.authenticateUser(response.data.token, tempmail)
                    console.log("User Authenitcated");

                    // <Redirect to={{
                    // pathname: '/profile',
                    // state: { from: props.location }
                    // }}/>
                    this.props.history.push('/profile');

                    }).catch(function (error) {

                    console.log(error);

                    });
                  }
                }}

              >
                Login
              </Button>

              <Typography component="p">
                Don't have an account? <Link to={'/signup'}>Create one</Link>
              </Typography>
            </form>
          </Paper>
        </main>

      </div>
    </div>

  );
}
}

LogIn.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

LogIn.contextTypes = {
  router: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(LogIn));



