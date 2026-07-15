import DashboardCard from "../components/DashboardCard";
import TaskList from "../components/TaskList";
import {Link} from "react-router-dom";


function Dashboard({totalTasks,completedTasks,pendingTasks,tasks,deleteTask,completeTask}) {
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
            <Link 
            to="/addtask"
            className="bg-blue-700 text-white px-5 py-3 rounded-2xl hover:bg-blue-900">
                + Add Task
                </Link> 
        </div>
        <TaskList
  tasks={tasks}
  deleteTask={deleteTask}
  completeTask={completeTask}
/>
      </div>
    </section>
  );
}
export default Dashboard;
