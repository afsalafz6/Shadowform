import React from 'react';
import Label from '../atoms/Label';
import Select from '../atoms/SelectBox';

const SelectField = (props) => {
  const {name, label, id}= props;
  const data = [
    {
      id: '1',
      name: 'One'
    },
    {
      id: '2',
      name: 'Two'
    }
  ];
  return (
    <div>
      <Label label={label} id={id} />
      <Select name={name} data={data} id={id} />
    </div>
  );
};

export default SelectField;
