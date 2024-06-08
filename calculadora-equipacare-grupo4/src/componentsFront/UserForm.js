import React, { useState } from 'react';

const UserForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name,});
    setName('');
  
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Dado1:</label>
          <input placeholder='infDado1'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Dado2:</label>
          <input placeholder='infDado1'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Dado3:</label> 
          <input placeholder='infDado'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Dado4:</label>
          <input placeholder='infDado'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Dado5:</label>
          <input placeholder='infDado'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Dado6:</label>
          <input placeholder='infDado'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Dado7:</label>
          <input placeholder='infDado'
            type="text"
            value={name}
            onChange={(e) =>  setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Dado8:</label>
          <input placeholder='infDado'
            type="text"
            value={name}
            onChange={(e) =>  setName(e.target.value)}
            required
          />
          
        </div>
        
      </form>


    </div>
  );
};

export default UserForm;