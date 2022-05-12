import React from 'react';
import styled from "styled-components";

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
    const { type ="number", id = '',size='', placeholder='' } = props;
    return (
        <div>
            <Input type={type} id={id} size={size} placeholder={placeholder} />
        </div>
    )
}

export default TextBox