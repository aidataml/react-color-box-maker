import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const addBox = box => {
    setBoxes(oldBoxes => [...oldBoxes, box]);
  };

  const removeBox = id => {
    setBoxes(boxes.filter(box => box.id !== id));
  };

  return (
    <div className="container">
        <div className="row">
            <NewBoxForm addBox={addBox} />
            {boxes.map(({ id, width, height, backgroundColor }) => (
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" key={id}>
            <Box
                width={width}
                height={height}
                backgroundColor={backgroundColor}
                removeBox={() => removeBox(id)}
            />
            </div>
      ))}
      </div>
    </div>
  );
}

export default BoxList;
