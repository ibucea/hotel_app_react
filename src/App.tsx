import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import RoomDetailsScreen from './screens/RoomDetailsScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  return (

    <Router>
       
       <Header/>
       <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/register" element={<RegisterScreen/>} />
        <Route path="/room/:id" element={<RoomDetailsScreen />} />
        <Route path="/account/profile" element={<ProfileScreen/>} />
        </Routes>
    </Router>
  
  );
}

export default App;
