import React from "react";
import items from "../../Data/items.json";

function BackgroundsSection(props) {
  const backgroundsFilteredArray = items.filter(
    (el) => el.elementCategory === "backgrounds"
  );

  return (
    <div className="itemsSection">
      <div className="clearBackgroundWrap">
        <span 
        className="clearBackgroundText"
        onClick={() => {
          props.removeBackground();
        }}
        >
           Click to clear background
        </span>
      </div>
      <div className="itemsWrapper">
        {backgroundsFilteredArray.map((item, i) => (
          <div className="imageContainer" key={i}>
            <img
              src={item.source}
              alt=""
              className="itemsImage"
              draggable="false"
              elementcategory={item.elementCategory}
              onClick={(e) => {
                props.addToBackground(e.target.src);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BackgroundsSection;
