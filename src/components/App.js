import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [filter, setFilter] = useState("All")
  
  function handleClick(event) {
    setFilter(event.target.innerText)
  }

  function handleDelete(text) {
    const tasksToDisplay = tasks.filter(task => task.text !== text )
    setTasks(tasksToDisplay)
  }
  const displayTasks = () => {
  return tasks.filter(task => {
    if(filter === "All") {
      return true
    } else {
      return task.category === filter
    }
  })
}

function onTaskFormSubmit(text, category) {
  setTasks([...tasks, {text: text, category: category}])
}
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter filter={filter} handleClick={handleClick} categories={CATEGORIES} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES} />
      <TaskList tasks={displayTasks()} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
