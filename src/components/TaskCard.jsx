import { useNavigate } from "react-router-dom";

function TaskCard({ task, deleteTask, completeTask }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-xl font-bold text-gray-800">{task.title}</h2>
      <p className="text-gray-600 mt-2">{task.description}</p>
      <div className="mt-3">
        <p>
          <span className="font-bold">Priority:</span> {task.priority}
        </p>
        <p>
          <span className="font-bold">Due Date:</span> {task.dueDate}
        </p>
      </div>

      <button
        onClick={() => completeTask(task.title)}
        disabled={task.completed}
        className={`px-4 py-2 rounded-xl text-white ${
          task.completed
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {task.completed ? "Completed ✅" : "Mark Complete"}
      </button>
      <button
        onClick={() => deleteTask(task.title)}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded-xl"
      >
        Delete
      </button>
      <p className="mt-2">
        Status:
        {task.completed ? "Completed" : "Pending"}
      </p>
    </div>
  );
}
export default TaskCard;
