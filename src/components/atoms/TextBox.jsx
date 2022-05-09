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
    return (
        <div>
            <Input type="text" id={props.id} size={props.size} placeholder={props.placeholder} />
        </div>
    )
}

export default TextBox