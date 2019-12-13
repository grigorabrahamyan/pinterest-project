import React from "react";
import Logo from "././Logo/logo.js";
import Search from "./Search/search";
import Home from "./Home/home";
import User from "./User/user";
import MyCreate from "./MyCreate/myCreates";
import Grid from '@material-ui/core/Grid';
import "./Header.css";

function Header() {
  return (
    <Grid>
      <Grid container spacing={0} className="header">
        <Grid item xs={1}><Logo /></Grid>
        <Grid item xs={8}><Search /></Grid>
        <Grid item xs={1}><Home /></Grid>
        <Grid item xs={1}><MyCreate /></Grid>
        <Grid item xs={1}><User /></Grid>
      </Grid>
    </Grid>
  );
}

export default Header;