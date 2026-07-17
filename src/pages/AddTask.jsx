import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddTask({ tasks, setTasks, editingTask, setEditingTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
      setDueDate(editingTask.dueDate);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    if (!title || !description || !priority || !dueDate) {
      alert("Please fill all Fields");
      return;
    }

    const newTask = {
      title,
      description,
      priority,
      dueDate,
      completed: editingTask ? editingTask.completed : false,
    };

    //edit Mode
    if (editingTask) {
      const alreadyExists = tasks.some(
        (task) =>
          task.title.toLowerCase() === title.toLowerCase() &&
          task.title !== editingTask.title,
      );

      if (alreadyExists) {
        alert("Task title already exists");
        return;
      }

      const updatedTasks = tasks.map((task) => {
        if (task.title === editingTask.title) {
          return newTask;
        }
        return task;
      });

      setTasks(updatedTasks);
    }

    //Add mode
    else {
      const alreadyExists = tasks.some(
        (task) => task.title.toLowerCase() === title.toLowerCase(),
      );

      if (alreadyExists) {
        alert("Task title already exists");
        return;
      }

      setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    //clear Form
    setTitle("");
    setDescription("");
    setPriority("");
    setDueDate("");
    //Exit edit mode
    setEditingTask(null);
    //NAvigate to Dashboard
    navigate("/dashboard");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="border rounded-3xl px-16 py-10 shadow-3xl bg-white">
        <h1 className="text-2xl text-center font-bold text-gray-800">
          Add New Task
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-6">
          <label htmlFor="tasktitle">Task Title</label>
          <input
            id="tasktitle"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-2xl p-2 w-full"
          />
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-2xl p-2"
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border rounded-2xl p-2"
          >
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <label htmlFor="duedate">Due Date:</label>
          <input
            id="duedate"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="border rounded-2xl"
          />
          <button
            type="submit"
            className="text-white border bg-blue-700 rounded-2xl  py-2 hover:bg-blue-950"
          >
            {editingTask ? "Update Task" : "Add Task"}
          </button>
        </form>
      </div>
    </section>
  );
}
export default AddTask;
