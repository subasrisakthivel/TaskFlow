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
      console.log("Editing Task:",editingTask);
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
      setDueDate(editingTask.dueDate);
    }
  }, [editingTask]);

 const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("editingTask =", editingTask);
console.log("editingTask id =", editingTask?._id);
console.log("SUBMIT editingTask =", editingTask);

  if (!title || !description || !priority || !dueDate) {
    alert("Please fill all Fields");
    return;
  }

  try {

    // EDIT MODE
    if (editingTask) {
      console.log("UPDATE BLOCK RUNNING");

      const response = await fetch(
        `http://localhost:3000/api/tasks/${editingTask._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            priority,
            dueDate,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      alert("Task Updated Successfully");

    }

    // ADD MODE
    else {

      const response = await fetch(
        "http://localhost:3000/api/tasks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            priority,
            dueDate,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      alert("Task Added Successfully");
    }

    // Clear Form
    
    setTitle("");
    setDescription("");
    setPriority("");
    setDueDate("");

    // Exit Edit Mode
    setEditingTask(null);

    // Go Dashboard
    navigate("/dashboard");

  } catch (error) {
    console.log(error);
  }
};


  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Add New Task
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-6">
          <label htmlFor="tasktitle" className="font-medium text-gray-700">Task Title</label>
          <input
            id="tasktitle"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="description" className="font-medium text-gray-700">Description</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <label htmlFor="duedate" className="font-medium text-gray-700">Due Date:</label>
          <input
            id="duedate"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-900 transition"
          >
            {editingTask ? "Update Task" : "Add Task"}
          </button>
        </form>
      </div>
    </section>
  );
}
export default AddTask;
