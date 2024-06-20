import style from './buttonCheckBox.module.css'
import React, { useState } from 'react';

const ButtonCheckbox = () => {
  const [checkedOption, setCheckedOption] = useState(null);

  const handleCheckboxChange = (option) => {
    if (checkedOption === option) {
      setCheckedOption(null);
    } else {
      setCheckedOption(option);
    }
  };

  return (
    <div className={style.ButtonCheckboxContainer}>
      <div className={style.ButtonCheckbox}>
        <label>
          <input
            type="checkbox"
            checked={checkedOption === 'opção1'}
            onChange={() => handleCheckboxChange('opção1')}
          />
          opção1
        </label>
      </div>

      <div className={style.ButtonCheckbox}>
        <label>
          <input
            type="checkbox"
            checked={checkedOption === 'opção2'}
            onChange={() => handleCheckboxChange('opção2')}
          />
          opção2
        </label>
      </div>

      <div className={style.ButtonCheckbox}>
        <label>
          <input
            type="checkbox"
            checked={checkedOption === 'opção3'}
            onChange={() => handleCheckboxChange('opção3')}
          />
          opção3
        </label>
      </div>
    </div>
  );
};

export default ButtonCheckbox;