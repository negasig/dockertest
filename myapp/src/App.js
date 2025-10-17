import logo from './logo.svg';
import './App.css';
import Users from './Users';
import React from 'react';
import Home from './Home';
import Adduser from './adduser';
import { BrowserRouter, Link, Route, Routes } from 'react-router';

function App() {
  return <>
   <BrowserRouter>
   <nav>
    <Link to="/">Home</Link>
    <Link to="/users">Users</Link>
    <Link to="/createuser">Createuser</Link>
   </nav>
   <Routes>
    <Route path="/" element={<Home />}/>
   <Route path="/users" element={<Users />}/>
   <Route path="/createuser" element={<Adduser />}/>
   </Routes>
   </BrowserRouter>
</>
  
}

export default App;
