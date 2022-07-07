/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
import './Header.css';


const Header: React.FC = () => {
return (
  <AppBar position="static">
  <Toolbar>
    <Typography variant="h4" className={'logo'}>
      HOTEL
    </Typography>
      <div className={'navlinks'}>
        <Link to="/" className={'link'}>
          Home
        </Link>
        <Link to="/login" className={'link'}>
          Login
        </Link>
        <Link to="/register" className={'link'}>
          Register
        </Link>
      </div>
  </Toolbar>
</AppBar>
)}

export default Header;

