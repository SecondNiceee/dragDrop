import React from 'react';
import DragAcitve from './DragActive';
import DragDefault from './DragDefault';

const Dragging = ({drag , dragStartHandler, dragLeaveHandler, onDropHandler}) => {
    return (
        <>

        {drag ? (
            <DragAcitve
            
              dragStartHandler={dragStartHandler}
              dragLeaveHandler={dragLeaveHandler}
              onDropHandler={onDropHandler}
            />
          ) : (
            <DragDefault
              dragStartHandler={dragStartHandler}
              dragLeaveHandler={dragLeaveHandler}
            />
          )}

          </>
    );
};

export default Dragging;