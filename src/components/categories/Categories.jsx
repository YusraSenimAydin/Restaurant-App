import React from 'react';
import './style.css'

const Categories = ({ categories, setCategory }) => {
  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <ul className="flex gap-4 md:flex-col text-lg ">
      <li className="category-item" onClick={() => handleCategoryChange('')}>
        All
      </li>
      {categories.map((category, index) => (
        <button key={index} className="category-item" onClick={() => handleCategoryChange(category)}>
          {category}
        </button>
      ))}
    </ul>
  );
};

export default Categories;
