import './App.css';
import React from 'react';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/signin' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
