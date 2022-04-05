import React, { useState, useEffect } from "react";
import UploadRoundedIcon from "@mui/icons-material/UploadRounded";

// images can be uploaded to client side manually
// for temporary storing data of images I used localstorage

function UploadSection(props) {
  const [uploadedImages, setUploadedImage] = useState([]);

  // clear localstorage on tab close to prevent loading blank images
  window.onbeforeunload = function () {
    const emptyArray = []
    localStorage.setItem("uploadedImages", JSON.stringify(emptyArray));
  };

  // saving state to local storage to prevent deleting uploaded images after closing tab with "uploads"
  useEffect(() => {
    const loadImages = JSON.parse(localStorage.getItem("uploadedImages"));
    setUploadedImage(loadImages);
  }, []);

  // adding images to localstorage every upload
  useEffect(() => {
    localStorage.setItem(
      "uploadedImages",
      JSON.stringify(uploadedImages)
    );
  }, [uploadedImages]);

  const UploadButton = () => {
    const handleUpload = (e) => {
      let img = e.target.files[0];
      setUploadedImage((prevState) => [...prevState, URL.createObjectURL(img)]);
    };
    return (
      <div className="uploadImageWrap">
        <label
          htmlFor="contained-button-upload"
          className="uploadImageButton"
          onChange={(e) => handleUpload(e)}
        >
          <input
            type="file"
            accept="image/*"
            id="contained-button-upload"
            hidden
          />
          <UploadRoundedIcon />
          <span className="uploadImageText">Upload</span>
        </label>
      </div>
    );
  };

  const UploadedImages = () => {
    return uploadedImages?.map((item, i) => (
      <div className="imageContainer" key={i}>
        <img
          src={item}
          alt=""
          className="itemsImage"
          draggable="true"
          elementcategory={item}
          onDragStart={(e) => {
            props.onChangeDragUrl(e.target.src);
          }}
          onClick={(e) => {
            props.handleAddOnClick(e.target.src);
          }}
        />
      </div>
    ));
  };

  // check if localstorage is empty, if empty display tooltip instead array of images
  const checkUploadedImagesNotEmpty = () => {
    if (uploadedImages.length > 0) {
      return true;
    }
    return false;
  };


  return (
    <div className="itemsSection">
      <UploadButton />
      {checkUploadedImagesNotEmpty() ? (
        <UploadedImages />
      ) : (
        <p className="uploadTooltip">Upload your images with button above.</p>
      )}
    </div>
  );
}

export default UploadSection;
