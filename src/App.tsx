import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
// import Rooms from './components/Rooms';
import LoginScreen from './screens/LoginScreen';
import Register from './components/Register';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (

    <Router>
       
       <Header/>
       <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/register" element={<Register/>} />
        </Routes>
    </Router>
  
  );
}

export default App;
