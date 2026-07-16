import { useState, useEffect } from "react";
import "./App.css";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTask from "./pages/AddTask";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;
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
            />
          }
        />
        <Route path="/addtask" element={<AddTask setTasks={setTasks} />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
