import { useState } from 'react';
import './App.css'
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import {BrowserRouter, Route, Routes} from  "react-router-dom";
import AddTask from './pages/AddTask';
import TaskList from './components/TaskList';

function App() {

  const [tasks,setTasks] = useState([]);


  const deleteTask =  (title)=>{
    const updatedTasks = tasks.filter((task)=>
    task.title !== title
  );
  setTasks(updatedTasks);
  }

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
      element={<AddTask setTasks={setTasks}/>}
      />
      
       
      </Routes>

      <TaskList 
      tasks={tasks}
      deleteTask={deleteTask}
      />

      <Footer/>
      
      

        
      
      </BrowserRouter>
    
    
  
  );
}

export default App;
