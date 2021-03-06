import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 80%;
  height: 30px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  margin-bottom: 10px;
`;

const TextBox = (props) => {
  const { type = 'text', id = '', name = '', size = '', placeholder = '', onChange, value } = props;
  const handleBlur = (e) => {
    // console.log('onBlur', e.target.value);
    if (!e.target.value) {
      console.log(`${e.target.name} Input field can't be Empty !!!`);
    }
  };

  return (
    <div>
      <Input
        type={type}
        id={id}
        value={value}
        name={name}
        size={size}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default TextBox;
