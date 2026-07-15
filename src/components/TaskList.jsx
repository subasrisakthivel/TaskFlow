import TaskCard from "./TaskCard";
function TaskList({tasks,deleteTask,completeTask }) {
  return (
    <div className="grid gap-5">
      {
      tasks.map((task) => (
        <TaskCard
        key={task.title}
        task={task}
        deleteTask={deleteTask}
        completeTask={completeTask}
        />
      ))
      }
    </div>
  );
}
export default TaskList;
