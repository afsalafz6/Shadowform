import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Select = styled.select`
  width: 80%;
  height: 30px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  margin-bottom: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const SelectBox = (props) => {
  const { name, id, value, onChange } = props;
  const [data] = useState(props.data);

  let options = data.map((data) => (
    <option key={data.name} value={data.name}>
      {data.name}
    </option>
  ));

  return (
    <Select name={name} placeholder="select" id={id} value={value} onChange={onChange}>
      <option>Select</option>
      {options}
    </Select>
  );
};

export default SelectBox;
