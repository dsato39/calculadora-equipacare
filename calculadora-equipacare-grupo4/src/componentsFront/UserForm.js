import React, { useState } from 'react';

const UserForm = ({ onSubmit }) => {
  const [fields, setFields] = useState({
    dado1: '',
    dado2: '',
    dado3: '',
    dado4: '',
    dado5: '',
    dado6: '',
    dado7: '',
    dado8: '',
  });

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value
    });
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ ...fields, checked });
    setFields({
      dado1: '',
      dado2: '',
      dado3: '',
      dado4: '',
      dado5: '',
      dado6: '',
      dado7: '',
      dado8: ''
    });
    setChecked(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Dados1:</label>
          <input
            name="dado1"
            placeholder="infDado1"
            type="text"
            value={fields.dado1}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Dados2:</label>
          <input
            name="dado2"
            placeholder="infDado2"
            type="text"
            value={fields.dado2}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Dados3:</label>
          <input
            name="dado3"
            placeholder="infDado3"
            type="text"
            value={fields.dado3}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Dados4:</label>
          <input
            name="dado4"
            placeholder="infDado4"
            type="text"
            value={fields.dado4}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Dados5:</label>
          <input
            name="dado5"
            placeholder="infDado5"
            type="text"
            value={fields.dado5}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Dados6:</label>
          <input
            name="dado6"
            placeholder="infDado6"
            type="text"
            value={fields.dado6}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Dados7:</label>
          <input
            name="dado7"
            placeholder="infDado7"
            type="text"
            value={fields.dado7}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Dados8:</label>
          <input
            name="dado8"
            placeholder="infDado8"
            type="text"
            value={fields.dado8}
            onChange={handleChange}
            required
          />
        </div>
        
      
      </form>
    </div>
  );
};

export default UserForm;