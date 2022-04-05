import React, { useState } from "react";
import items from "../../Data/items.json";
import FilterBar from "./filterBar";

// images can be dragged or cliked for adding it to canvas

function ImagesSection(props) {
  const [selectedCategory, setSelectedCategory] = useState("")

  // get images that are declared as photos from /Data/items.json
  const photosFilteredArray = items.filter(
    (el) => el.elementCategory === "photos"
  );
  
  // filter images by selected category
  const filterImagesByCategories = (array) => {
    let filteredArrayToReturn;
    if(selectedCategory.length > 0) {
      filteredArrayToReturn = array.filter(
        (el) => el.photoCategory === selectedCategory
      )
      return filteredArrayToReturn;
    }
    return array;
  }
  // array of images ready to display
  const arrayToDisplay = filterImagesByCategories(photosFilteredArray)
  


  return (
    <div className="itemsSection">
      <FilterBar 
        items={photosFilteredArray} 
          onChange={(selectedCategory) => {
            setSelectedCategory(selectedCategory)
          }}
        />

      <div className="itemsWrapper">
        {arrayToDisplay.map((item, i) => (
          <div className="imageContainer" key={i}>
            <img
              src={item.source}
              alt=""
              className="itemsImage"
              draggable="true"
              elementcategory={item.elementCategory}
              onDragStart={(e) => {
                props.onChangeDragUrl(e.target.src);
              }}
              onClick={(e) => {
                props.handleAddOnClick(e.target.src);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImagesSection;
