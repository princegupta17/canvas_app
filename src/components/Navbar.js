import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faRedo } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ undo, redo }) => {
  return (
    <nav className="text-white p-4 flex justify-between items-center">
      <div className="text-gray-500 font-bold text-xl">Logo</div>
      <div className="space-x-4 flex justify-center w-full md:w-auto">
        <button
          onClick={undo}
          className="bg-gray-500 px-4 py-2 rounded flex items-center space-x-2"
        >
          <FontAwesomeIcon icon={faUndo} />
          <span>undo</span>
        </button>
        <button
          onClick={redo}
          className="bg-gray-500 px-4 py-2 rounded flex items-center space-x-2"
        >
          <FontAwesomeIcon icon={faRedo} />
          <span>redo</span>
        </button>
      </div>

      {/* Dummy div for spacing alignment on larger screens */}
      <div className="hidden md:block w-24"></div>
    </nav>
  );
};

export default Navbar;
