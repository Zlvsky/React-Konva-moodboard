import React, { useState, useEffect } from 'react';
import './Styles/itemsList.css';
import { tools } from '../Data/tools';

import ImagesSection from './ItemsListComponents/ImagesSection';
import BackgroundsSection from './ItemsListComponents/BackgroundsSection';
import UploadSection from "./ItemsListComponents/UploadSection";
import ShareSection from "./ItemsListComponents/ShareSection";
import ToolsBar from './ToolsBar';

import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

function ItemsList(props) {
  const [selectedTools, setSelectedTools] = useState(0);
  // componentsMap keys must be same with components key value in /Data/tools.js
  const componentsMap = {
    imagesSection: ImagesSection,
    backgroundsSection: BackgroundsSection,
    uploadSection: UploadSection,
    shareSection: ShareSection
  };
  const [sidebarCollapse, setSidebarCollapse] = useState(true);

  const changeSelectedTool = (id) => {
    setSelectedTools(id)
  }

  const openMenuOnClick = () => {
    sidebarCollapse ? setSidebarCollapse(false) : setSidebarCollapse(true);
  }

  const handleCanvasResizeOnSidebarChange = () => {
    props.resizeCanvasOnSidebarChange();
  }

  // everytime when sidebar state changes function in Canvas.js is being called for resizing canvas dimensions
  useEffect(() => {
    handleCanvasResizeOnSidebarChange();
  }, [sidebarCollapse]);


  return (
    <div
      className={`itemsListWrap ${
        sidebarCollapse ? "sidebarOpen" : "sidebarClosed"
      }`}
    >
      <div className="expandButton" onClick={() => openMenuOnClick()}><ExpandLessRoundedIcon /></div>
      <div className="itemsListBody">
        <ToolsBar changeSelectedTool={changeSelectedTool} />

        {tools.map((val) => {
          if (val.id === selectedTools) {
            const Component = componentsMap[val.component];
            return (
              <Component
                key={val.id}
                onChangeDragUrl={props.onChangeDragUrl}
                handleAddOnClick={props.handleAddOnClick}
                dragUrl={props.dragUrl}
                addToBackground={props.addToBackground}
                removeBackground={props.removeBackground}
                stageRef={props.stageRef}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default ItemsList;
