import React from 'react';

function Box({ id, width, height, backgroundColor, removeBox }) {
    const style = {
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor,
    };
  
    return (
      <div className="box-container">
        <div className="box" style={style}></div>
        <button className="remove-button" onClick={() => removeBox(id)}>Remove Box</button>
      </div>
    );
  } 

export default Box;