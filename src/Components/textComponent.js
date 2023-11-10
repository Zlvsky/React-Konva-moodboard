import React, { useRef, useEffect, Fragment } from 'react';
import { Text, Transformer } from 'react-konva';

const TextComponent = ({ text, shapeProps, id, isSelected, onSelect, onChange }) => {
  const shapeRef = useRef();
  const transformRef = useRef();

  useEffect(() => {
    if (isSelected) {
      transformRef.current.setNode(shapeRef.current);
      transformRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const handleTransformEnd = () => {
    const node = shapeRef.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    // Reset scale to 1 to get the correct width and height
    node.scaleX(1);
    node.scaleY(1);

    onChange({
      ...shapeProps,
      x: node.x(),
      y: node.y(),
      // Set minimal value
      width: Math.max(5, node.width() * scaleX),
      height: Math.max(5, node.height() * scaleY),
    });
  };

  return (
    <Fragment>
      <Text
        {...shapeProps}
        id={id}
        draggable
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        onTransformEnd={handleTransformEnd}
        text={text}
        fontSize={shapeProps.fontSize || 16}
      />
      {isSelected && (
        <Transformer
          ref={transformRef}
          boundBoxFunc={(oldBox, newBox) => {
            // Limit resize
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

export default TextComponent;
