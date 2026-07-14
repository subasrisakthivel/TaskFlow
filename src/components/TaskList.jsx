import TaskCard from "./TaskCard";
function TaskList({tasks,deleteTask }) {
  return (
    <div className="grid gap-5">
      {
      tasks.map((task) => (
        <TaskCard
        key={task.title}
        task={task}
        deleteTask={deleteTask}
        />
      ))
      }
    </div>
  );
}
export default TaskList;
