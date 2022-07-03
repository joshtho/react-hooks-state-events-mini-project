import React from "react";
import Task from "./Task"

function TaskList({tasks, handleDelete}) {
  
  
  
  
  return (
    <div className="tasks">
      {tasks.map((task, index) => {
       return <Task 
       key={index} 
       handleDelete={handleDelete}
       task={task}
       />
      })}
    </div>
  );
}

export default TaskList;
