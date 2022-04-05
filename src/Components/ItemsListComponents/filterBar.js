import React from "react";

// simple filterBar for conditional rendering images by categories in sidebar

function FilterBar(props) {
  // function to create array of list of uniques categories based on images categories in /Data/items.json
  const itemsWithoutDuplicates = (itemsToReturn) => {
    let categoryArray = [];
    itemsToReturn.forEach((element) => {
      let photoCategroy = element.photoCategory;
      let isInArray = categoryArray.indexOf(photoCategroy);
      if (isInArray === -1) {
        categoryArray.push(photoCategroy);
      }
    });
    return categoryArray;
  };
  const categoryArray = itemsWithoutDuplicates(props.items);
  const handleFilterChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <label className="categorySelectLabel">
      <select onChange={handleFilterChange} className="categorySelect">
        <option value="">All</option>
        {categoryArray.map((val, i) => (
          <option key={i} value={val}>
            {val}
          </option>
        ))}
      </select>
    </label>
  );
}

export default FilterBar;
