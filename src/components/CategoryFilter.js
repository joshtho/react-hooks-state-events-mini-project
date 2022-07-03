import React from "react";

function CategoryFilter({categories, handleClick, filter }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return <button 
        key={category} 
        className={category === filter ? "selected" : "button"} 
        onClick={handleClick}
        >
          {category}
        </button>
      })}
    </div>
  );
}

export default CategoryFilter;
