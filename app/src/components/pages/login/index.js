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

function logIn(props) {
  const { classes } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              Sign in
            </Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  placeholder="burrito@taco.com"
                  className="input"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
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
                  value={password}
                  onChange={e => setPassword(e.target.value)}
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
                  if (email !== "" && password !== "") {

                    axios.post('/api/users/signin', {
                      email: email,
                      password: password
                    }).then(function (response) {
                    console.log(response.data.token);

                    setEmail("");
                    setPassword("");

                    Auth.authenticateUser(response.data.token)
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

logIn.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

logIn.contextTypes = {
  router: PropTypes.object.isRequired
};


export default withStyles(styles)(logIn);



