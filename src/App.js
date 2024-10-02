import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Canvas from "./components/Canvas";
import Controls from "./components/Controls";

const App = () => {
  const [text, setText] = useState(""); // State to store the text to display
  const [fontSize, setFontSize] = useState(16); // State for font size
  const [fontStyle, setFontStyle] = useState({
    bold: false,
    italic: false,
    underline: false,
    alignCenter: false,
  }); // Style settings
  const [selectedFont, setSelectedFont] = useState("Arial"); // Font family selection
  const [history, setHistory] = useState([]); // History for undo/redo functionality
  const [currentStep, setCurrentStep] = useState(-1); // Track current undo/redo step

  const addToHistory = (newText) => {
    const newHistory = history.slice(0, currentStep + 1); // Save text changes
    setHistory([...newHistory, newText]);
    setCurrentStep(currentStep + 1);
  };

  const handleTextChange = (newText) => {
    setText(newText);
    addToHistory(newText);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar for Undo/Redo buttons */}
      <Navbar
        undo={() => setCurrentStep(Math.max(currentStep - 1, 0))}
        redo={() =>
          setCurrentStep(Math.min(currentStep + 1, history.length - 1))
        }
      />

      {/* Canvas to display and move text */}
      <Canvas
        text={currentStep >= 0 ? history[currentStep] : text}
        fontSize={fontSize}
        fontStyle={fontStyle}
        selectedFont={selectedFont}
      />

      {/* Controls for font size, style, and adding text */}
      <Controls
        setText={handleTextChange}
        setFontSize={setFontSize}
        setFontStyle={setFontStyle}
        fontStyle={fontStyle}
        setSelectedFont={setSelectedFont}
        fontSize={fontSize}
      />
    </div>
  );
};

export default App;
