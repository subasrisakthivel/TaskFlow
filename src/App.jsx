import { useState, useEffect } from "react";
import "./App.css";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTask from "./pages/AddTask";
import Summary from "./pages/Summary";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [editingTask, setEditingTask] = useState(null);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "high").length;

  const mediumPriorityTasks = tasks.filter(
    (task) => task.priority === "medium").length;

  const lowPriorityTasks = tasks.filter(
    (task) => task.priority === "low").length;

  const deleteTask = (title) => {
    const updatedTasks = tasks.filter((newTask) => newTask.title !== title);
    setTasks(updatedTasks);
  };

  const [search, setSearch] = useState("");
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase()),
  );

  const [statusFilter, setStatusFilter] = useState("all");
  const statusFilteredTasks = filteredTasks.filter((task) => {
    if (statusFilter === "all") {
      return true;
    }

    if (statusFilter === "completed") {
      return task.completed;
    }

    if (statusFilter === "pending") {
      return !task.completed;
    }
  });

  const completeTask = (title) => {
    const markedTasks = tasks.map((newTask) => {
      if (newTask.title === title) {
        return {
          ...newTask,
          completed: true,
        };
      } else {
        return newTask;
      }
    });
    setTasks(markedTasks);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <Dashboard
              totalTasks={totalTasks}
              completedTasks={completedTasks}
              pendingTasks={pendingTasks}
              tasks={statusFilteredTasks}
              deleteTask={deleteTask}
              completeTask={completeTask}
              search={search}
              setSearch={setSearch}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              setEditingTask={setEditingTask}
            />
          }
        />
        <Route
          path="/addtask"
          element={
          <AddTask 
          tasks={tasks} 
          setTasks={setTasks}
          editingTask={editingTask}
          setEditingTask={setEditingTask} />
        }
        />
        <Route
        path= "/summary"
        element={
        <Summary
        totalTasks={totalTasks}
      completedTasks={completedTasks}
      pendingTasks={pendingTasks}
      tasks={tasks} 
      highPriorityTasks={highPriorityTasks}
      mediumPriorityTasks={mediumPriorityTasks}
      lowPriorityTasks={lowPriorityTasks}/>
        }
        />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
