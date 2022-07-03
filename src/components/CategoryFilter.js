import React from "react";

function CategoryFilter({categories, setFilter, filter }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return <button 
        key={category} 
        className={category === filter ? "selected" : "button"} 
        onClick={() => setFilter(category)}
        >
          {category}
        </button>
      })}
    </div>
  );
}

export default CategoryFilter;
