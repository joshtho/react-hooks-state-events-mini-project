import React, { useState } from "react";


function NewTaskForm({categories, onTaskFormSubmit}) {
  const [textInput, setTextInput] = useState("")
  const [categoryInput, setCategoryInput] = useState("Code")
  
  const filterCategories = categories.filter(cat => cat !== "All") 
  const renderOptions = () => {
    return filterCategories.map(category => {
      return <option key={category}>{category}</option>
    })
  }
  
  function handleChange(event) {
    if(event.target.name === 'text'){
      setTextInput(event.target.value)
    } else {
      setCategoryInput(event.target.value)
    }

  }
  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(textInput, categoryInput)
  }
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={textInput} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange} value={categoryInput} >
          {renderOptions()}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
