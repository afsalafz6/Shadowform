import React from 'react';
import { PropTypes } from 'prop-types';
import Label from '../atoms/Label';
import Select from '../atoms/SelectBox';

const SelectField = (props) => {
  const {name, label, id, value, onChange}= props;
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
      <Select name={name} data={data} id={id} value={value} onChange={onChange} />
    </div>
  );
};
SelectField.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};
SelectField.defaultProps = {
  name: '',
  id: '',
  value: '',
  onChange: () => {console.log("onChange func is missing !!!");}
};
export default SelectField;
