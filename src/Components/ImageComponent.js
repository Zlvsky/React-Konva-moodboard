import React, { useRef, useEffect, Fragment } from 'react';
import { Image, Transformer } from "react-konva";
import useImage from 'use-image';

// image component that contains various event handlers
// image component is used for passing it to Konva canvas

const ImageComponent = ({ image, shapeProps, id, isSelected, onSelect, onChange }) => {
  // creating image based on its src
  const [img] = useImage(image.src);
  const shapeRef = useRef();
  const transformRef = useRef();

  // if selected create box around the image to allow performing resizes
  useEffect(() => {
    if (isSelected) {
      transformRef.current.setNode(shapeRef.current);
      transformRef.current.getLayer().batchDraw()
    }
  }, [isSelected]);

  // if dropped on konva stage pass its attributes like src, width, height, x and y
  const handleOnDrop = e => {
    onChange({
      ...shapeProps,
      x: e.target.x(),
      y: e.target.y()
    });
  }

  // called when dragging starts image in konva Canvas
  const handleDragStart = e => {
    // move dragged images on top
    onChange({
      ...shapeProps,
      x: e.target.x(),
      y: e.target.y()
    })
    onSelect(e);
    e.target.moveToTop();


    // creates shadow around the image
    e.target.setAttrs({
      shadowOffset: {
        x: 0,
        y: 0
      },
      scaleX: 1.05,
      scaleY: 1.05,
      shadowBlur: 16,
      ShadowOpacity: 0.6
    });
  };

  // called when dragging ends 
  const handleDragEnd = e => {
    // clear shadow around the image
    e.target.to({
      duration: 0.1,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 0,
      shadowOffsetY: 4,
      shadowBlur: 10,
      ShadowOpacity: 0.4
    });

    // updates the position
    onChange({
      ...shapeProps,
      x: e.target.x(),
      y: e.target.y()
    });
  };


  // called when performed resize
  const handleTransformOnEnd = e => {
    // node - refference to image 
    const node = shapeRef.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();
    node.scaleX(1);
    node.scaleY(1);
    node.width(Math.max(5, node.width() * scaleX));
    node.height(Math.max(node.height() * scaleY));
    onChange({
      ...shapeProps,
      x: node.x(),
      y: node.y(),
      // set minimal value
      width: node.width(),
      height: node.height()
    });
  }

  return (
    <Fragment>
      <Image
        image={img}
        id={id}
        draggable
        onDrop={handleOnDrop}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        shadowColor="black"
        shadowBlur={10}
        shadowOffsetX={0}
        shadowOffsetY={4}
        shadowOpacity={0.6}
        onTransformEnd={handleTransformOnEnd}
          />
      {isSelected && (
        // when selected it creates box around the image to perform resizes
            <Transformer
              ref={transformRef}
              boundBoxFunc={(oldBox, newBox) => {
                // limit resize
                if (newBox.width < 5 || newBox.height < 5) {
                  return oldBox;
                }
                return newBox;
              }}
            />
          )}
    </Fragment>
  );
};

export default ImageComponent;
