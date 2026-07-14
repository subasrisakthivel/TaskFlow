function TaskCard({task,deleteTask}){
    return(
        <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-800">{task.title}</h2>
            <p className="text-gray-600 mt-2">{task.description}</p>
            <div className="mt-3">
            <p>
                <span className="font-bold">
                    Priority:
                    </span>  
                    {" "}
                    {task.priority}
            </p>
            <p>
                
                <span className="font-bold">
                Due Date:
                </span>
                {" "} 
                {task.dueDate}</p>
            </div>
             <button 
             onClick={()=>deleteTask(task.title)}
             className="mt-4 bg-red-600 text-white px-4 py-2 rounded-xl">
                Delete
            </button>
        </div>
    );
} 
export default TaskCard;