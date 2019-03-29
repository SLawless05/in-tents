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

function profile(props) {

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
            <div>
            <Typography component="p">
                Don't have an account? <Link to={'/signup'}>Create one</Link>
              </Typography>
            </div>
      </div>
    </div>
    </div>
    </div>

  );
  }


export default (profile);



