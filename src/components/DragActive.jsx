import React from "react";
import loadMe from '../images/loaMe.svg'
const DragAcitve = ({ dragStartHandler, dragLeaveHandler, onDropHandler }) => {
  return (
    <div
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
      onDrop={(e) => {
        onDropHandler(e);
      }}
    >
      <div className="bottom__container" style={{zIndex : 10}}>
        <div className="bottom__container-images"> </div>
        <img src={loadMe} className="loadMe" alt="" />
        <p>drop the file to download it</p>
      </div>
    </div>
  );
};

export default DragAcitve;
