import React, { useState } from "react";


function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")
  
  // const filterCategories = categories.filter(cat => cat !== "All") 
  // const renderOptions = () => {
  //   return filterCategories.map(category => {
  //     return <option key={category}>{category}</option>
  //   })
  // }
  
  
  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({text, category})
    setText('')
    setCategory("Code")
  }
  
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => setCategory(e.target.value)} value={category} >
          {categories.map((cat) => {
            return <option key={cat}>{cat}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
