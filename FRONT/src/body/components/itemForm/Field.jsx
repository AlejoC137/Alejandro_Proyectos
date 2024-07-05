import React, { useState } from 'react';

const Field = ({ label }) => {
  const [value, setValue] = useState(''); // State to store the value of the input field

  const handleChange = (e) => {
    setValue(e.target.value); // Update the value state when user types
  };

  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default Field;
