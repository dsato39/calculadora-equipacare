import React, { useState } from 'react';

const ButtonCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          Check me
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          Check me
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          Check me
        </label>
      </div>
    </div>
  );
};

export default ButtonCheckbox;