import React from "react";
import iconOne from '../images/iconOne.svg'
import iconThree from '../images/iconThree.svg'
import iconTwo from '../images/iconTwo.svg'
const DragDefault = ({ dragStartHandler, dragLeaveHandler }) => {
  return (
    <label htmlFor="myInput"
      onDragStart={(e) => {
        dragStartHandler(e);
      }}
      onDragLeave={(e) => {
        dragLeaveHandler(e);
      }}
      onDragOver={(e) => {
        dragStartHandler(e);
      }}
      className="drop-area"
    >
      <div className="bottom__container">
        <div className="bottom__container-images">
          <img src={iconOne} />
          <img src={iconThree} />
          <img src={iconTwo} />
        </div>
        <p>Drag and drop files here , or browse your computer.</p>
      </div>
    </label>
  );
};

export default DragDefault;
