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
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
  fetch("http://localhost:3000/api/tasks")
    .then((res) => res.json())
    .then((data) => {
      setTasks(data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

  

  const [editingTask, setEditingTask] = useState(null);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed").length;
  const pendingTasks = tasks.filter(
    (task) => task.status !== "Completed").length;

  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "high").length;

  const mediumPriorityTasks = tasks.filter(
    (task) => task.priority === "medium").length;

  const lowPriorityTasks = tasks.filter(
    (task) => task.priority === "low").length;

 const deleteTask = async (id) => {
  try {
    await fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks((prevTasks) =>
      prevTasks.filter((task) => task._id !== id)
    );

    alert("Task Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
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
      return task.status === "Completed";
    }

    if (statusFilter === "pending") {
      return task.status !== "Completed";
    }
  });

const completeTask = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/tasks/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "Completed",
        }),
      }
    );

    const updatedTask = await response.json();

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === id ? updatedTask : task
      )
    );
    console.log(tasks);

    alert("Task Completed ✅");
  } catch (error) {
    console.log(error);
  }
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
