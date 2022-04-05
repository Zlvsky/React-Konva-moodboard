import React from 'react';
import { Rect } from 'react-konva';
import useImage from 'use-image';

// Konva way of adding background image to canvas
// creating Rect Konva component
// placing it at the bottom of all elements
// changing its z-index to lowest value

function CanvasBackground({ backgroundUrl, width, height }) {
  // create image of image src
  const [background] = useImage(backgroundUrl);
  // calculations to fill the whole area of canvas
  let widthRatio = 1, heightRatio = 1;
  if(background !== undefined) {
    widthRatio = width / background.width;
    heightRatio = height / background.height;
  }
  return (
    <Rect
      x={0}
      y={0}
      zIndex={-100}
      width={width}
      height={height}
      fillPatternImage={background}
      fillPatternRepeat={'no-repeat'}
      fillPatternScaleX={widthRatio}
      fillPatternScaleY={heightRatio}
      id="canvasBackground"
      >
    </Rect>
  )
}

export default CanvasBackground
