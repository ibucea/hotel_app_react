/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
import './Styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootStateOrAny } from '../redux/store';
import { logout } from '../redux/actions/UserActions';

const Header: React.FC = () => {

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: RootStateOrAny) => state.userLogin); 

  const handleLogout = () => {
    navigate("/");
    logout(dispatch)();
  }

return (
  <AppBar position="static">
  <Toolbar>
    <Typography variant="h4" className={'logo'}>
      HOTEL
    </Typography>
      <>
        <Link to="/" className={'homelink'}>
          Home
        </Link>

        { userInfo ? 
        <>
           <div className={'userInfo'}>
           Hi, {userInfo.user.username}
         </div>
        
              <Link to="/account/profile" className={'profilelink'}>
                <div>Profile</div>
              </Link>
              <div onClick={handleLogout}>Logout</div>
            </>
            :         
            <>
              <Link to="/login" className="loginLink">
                Login
              </Link>
              <Link to="/register" className="registerLink">
                <div>Register</div>
              </Link>
            </>
        }
      </>
  </Toolbar>
</AppBar>
)}

export default Header;

