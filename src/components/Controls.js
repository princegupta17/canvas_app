import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faUnderline,
  faAlignCenter,
} from "@fortawesome/free-solid-svg-icons";

const Controls = ({
  setText,
  setFontSize,
  setFontStyle,
  fontStyle,
  setSelectedFont,
  fontSize,
}) => {
  const [input, setInput] = useState("");

  const fonts = [
    "Arial",
    "Calibri",
    "Cambria",
    "Times New Roman",
    "Georgia",
    "Open Sans",
    "Palatino",
    "Roboto",
    "Sans-serif",
    "Serif",
    "Courier",
    "Fantasy",
  ];

  const handleTextSubmit = () => {
    setText(input);
    setInput(""); // Clear input after submission
  };

  const toggleStyle = (style) => {
    setFontStyle((prev) => ({
      ...prev,
      [style]: !prev[style],
    }));
  };

  const increaseFontSize = () => setFontSize(fontSize + 1);
  const decreaseFontSize = () =>
    setFontSize(fontSize > 10 ? fontSize - 1 : fontSize);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4">
        {/* Font Selection */}
        <select
          className="border p-1 text-gray-600 rounded-2xl"
          onChange={(e) => setSelectedFont(e.target.value)}
        >
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>

        {/* Font Size Control */}
        <div className="border-transparent bg-white rounded-xl">
          <button
            onClick={decreaseFontSize}
            className="text-gray-500 px-2 py-1 rounded"
          >
            -
          </button>
          <span className="text-gray-500">{fontSize}</span>
          <button
            onClick={increaseFontSize}
            className="text-gray-500 px-2 py-1 rounded"
          >
            +
          </button>
        </div>

        {/* Font Style Controls */}
        <button
          onClick={() => toggleStyle("bold")}
          className={`text-gray-800 py-2 rounded ${
            fontStyle.bold ? "font-bold" : ""
          }`}
        >
          <FontAwesomeIcon icon={faBold} />
        </button>
        <button
          onClick={() => toggleStyle("italic")}
          className={`text-gray-500 py-2 rounded ${
            fontStyle.italic ? "italic" : ""
          }`}
        >
          <FontAwesomeIcon icon={faItalic} />
        </button>
        <button
          onClick={() => toggleStyle("alignCenter")}
          className={`text-gray-500 py-2 rounded ${
            fontStyle.alignCenter ? "text-center" : ""
          }`}
        >
          <FontAwesomeIcon icon={faAlignCenter} />
        </button>
        <button
          onClick={() => toggleStyle("underline")}
          className={`text-gray-500 py-2 rounded ${
            fontStyle.underline ? "underline" : ""
          }`}
        >
          <FontAwesomeIcon icon={faUnderline} />
        </button>
      </div>

      {/* Text Input and Add Text Button */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          className="border p-2"
          placeholder="Add Text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleTextSubmit}
          className="border bg-gray-200 text-black font-semibold px-4 py-2 rounded-2xl"
        >
          Add Text
        </button>
      </div>
    </div>
  );
};

export default Controls;
