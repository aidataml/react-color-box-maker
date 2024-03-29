import React, { useState } from "react";
import { v4 as uuid } from 'uuid';


function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: ""
  });

  const handleChanges = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmission = evt => {
    evt.preventDefault();
    addBox({ ...formData, id: uuid() });
    setFormData({ height: "", width: "", backgroundColor: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <div>
          <label htmlFor="height">Height: </label>
          <input
            onChange={handleChanges}
            type="text"
            name="height"
            value={formData.height}
            id="height"
          />
        </div>
        <div>
          <label htmlFor="width">Width: </label>
          <input
            onChange={handleChanges}
            type="text"
            name="width"
            id="width"
            value={formData.width}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Color: </label>
          <input
            onChange={handleChanges}
            type="text"
            name="backgroundColor"
            value={formData.backgroundColor}
            id="backgroundColor"
          />
        </div>
        <button id="newBoxButton" class="btn btn-primary">Create Box!</button>
      </form>
    </div>
  );
}

export default NewBoxForm;