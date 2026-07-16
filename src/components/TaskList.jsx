import TaskCard from "./TaskCard";

function TaskList({tasks,deleteTask,completeTask }) {
  if (tasks.length === 0) {
    return (
      <h2 className="text-center text-gray-500 mt-10 text-xl">
        No tasks found 😔
      </h2>
    );
  } 
  
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
