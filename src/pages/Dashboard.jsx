import DashboardCard from "../components/DashboardCard";
import TaskList from "../components/TaskList";
import {Link} from "react-router-dom";


function Dashboard(
  {
    totalTasks,
    completedTasks,
    pendingTasks,
    tasks,
    deleteTask,
    completeTask, 
    search, 
    setSearch,
    statusFilter,
    setStatusFilter,
    setEditingTask,
  }) {
  const taskStats = [
  {
    title: "Total Task",
    count: totalTasks,
  },
  {
    title: "Completed",
    count: completedTasks,
  },
  {
    title: "Pending",
    count: pendingTasks,
  },
];
  return (
    <section className="min-h-screen bg-gray-100 p-10">
      <div>
        <h1 className="text-gray-800 font-bold text-center text-3xl">
          TaskFlow Dashboard
        </h1>
        <h2 className="text-gray-500 text-center mt-2">Welcome back👋</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {taskStats.map((item) => {
            return (
              <DashboardCard
                key={item.title}
                title={item.title}
                count={item.count}
              />
            );
          })}
        </div>
        <div className="flex justify-center mt-10">
          <input
  type="text"
  placeholder=" 🔍 Search tasks..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="border rounded-xl p-3 w-full max-w-md "
/>
<div className="flex justify-center gap-4 mt-6">
  <button
    onClick={() => setStatusFilter("all")}
    className={`text-white px-4 py-2 rounded-xl ${
      statusFilter === "all"
      ? "bg-blue-700"
      : "bg-gray-400 hover:bg-gray-500"
    }`}
  >
    All
  </button>

  <button
    onClick={() => setStatusFilter("completed")}
    className={`px-4 py-2 rounded-xl text-white ${
  statusFilter === "completed"
    ? "bg-green-600"
    : "bg-gray-400 hover:bg-gray-500"
}`}
  >
    Completed
  </button>

  <button
    onClick={() => setStatusFilter("pending")}
    className={`px-4 py-2 rounded-xl text-white ${
  statusFilter === "pending"
    ? "bg-yellow-500"
    : "bg-gray-400 hover:bg-gray-500"
}`}
  >
    Pending
  </button>
</div>
<div className="flex justify-center gap-4 mt-8">
            <Link 
            to="/addtask"
            className="bg-blue-700 text-white px-5 py-3 rounded-2xl hover:bg-blue-900">
                + Add Task
                </Link>
                <Link
  to="/summary"
  className="bg-green-700 text-white px-5 py-3 rounded-2xl hover:bg-green-900"
>
  📊 View Summary
</Link>
</div> 
        </div>
         
        
        <TaskList
  tasks={tasks}
  deleteTask={deleteTask}
  completeTask={completeTask}
  setEditingTask={setEditingTask}
/>
      </div>
    </section>
  );
}
export default Dashboard;
