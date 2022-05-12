import React from 'react';

const Label = (props) => {
  const { id, label } = props;
  return (
    <div>
      <label htmlFor={id}>{label} </label>
    </div>
  );
};

export default Label;
