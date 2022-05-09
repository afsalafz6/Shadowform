import React from 'react';
import styled from "styled-components";

const Button1 = styled.button`
  background: #25a5be;
  color: white;
  padding: 0.50em 1.5em;
  position:relative;
  margin-top:50px;
`;
// position:${props => props.position};
// margin-top::${props => props.top};
// position:relative;
// margin-top:50px;
const Button = (props) => {
    const { text = ''} = props;
  return (
    <div>
      <Button1>{text}</Button1>
    </div>
  )
}

export default Button
