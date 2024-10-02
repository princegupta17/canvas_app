import React, { useState } from "react";

const Canvas = ({ text, fontSize, fontStyle, selectedFont }) => {
  const { bold, italic, underline, alignCenter } = fontStyle;

  const canvasWidth = 1440; // Full screen width (laptop screen width)
  const canvasHeight = 580; // Canvas height

  const grayBoxLeft = 5; // Left position of the gray box
  const grayBoxWidth = 395; // Width of the gray box (932.5 - 507.5)

  // Set initial position in the center of the gray box
  const initialX = grayBoxLeft + grayBoxWidth / 2; // Horizontal center of the gray box
  const initialY = canvasHeight / 2; // Vertical center of the canvas

  const [position, setPosition] = useState({
    x: initialX, // Set initial X position in the center of the box
    y: initialY, // Set initial Y position in the center vertically
  });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const computedStyle = {
    fontSize: `${fontSize}px`,
    fontWeight: bold ? "bold" : "normal",
    fontStyle: italic ? "italic" : "normal",
    textDecoration: underline ? "underline" : "none",
    textAlign: alignCenter ? "center" : "left",
    fontFamily: selectedFont,
    position: "absolute",
    left: alignCenter ? "50%" : `${position.x}px`, // Adjust position for centering
    transform: alignCenter ? "translateX(-50%)" : "none", // Center adjustment
    top: `${position.y}px`,
    cursor: isDragging ? "grabbing" : "grab",
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      // Constrain the movement within the gray box (507.5px to 932.5px) for width
      const newX = Math.max(
        grayBoxLeft,
        Math.min(grayBoxLeft + grayBoxWidth - 10, e.clientX - offset.x)
      ); // Constrain width within 507.5px to 932.5px

      const newY = Math.max(
        0,
        Math.min(canvasHeight - 10, e.clientY - offset.y)
      ); // Constrain height within 0px to canvasHeight

      setPosition({
        x: newX,
        y: newY,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="flex justify-center items-center m-8 p-4 relative"
      style={{ width: canvasWidth, height: 600 }} // Set canvas dimensions
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Gray background section, constrained width between 507.5px and 932.5px */}
      <div
        className="absolute bg-gray-200"
        style={{
          left: "507.5px",
          width: "425px", // Width between 507.5 and 932.5
          height: "600px",
        }}
      >
        <p
          style={computedStyle}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Canvas;
