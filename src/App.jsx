import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import {BrowserRouter, Route, Routes} from  "react-router-dom";
import AddTask from './pages/AddTask';

function App() {
  

  return (
  
    <BrowserRouter>
    
      <Navbar/>
      <Routes>
        
      <Route 
      path="/"
      element={<Landing />}
      />
       
      <Route 
      path="/login"
      element={<Login />}
      />

      <Route 
      path="/dashboard"
      element={<Dashboard/>}
      />
      <Route
      path="/addtask"
      element={<AddTask/>}/>

       
      </Routes>

      

      <Footer/>
      
      

        
      
      </BrowserRouter>
    
    
  
  );
}

export default App;
