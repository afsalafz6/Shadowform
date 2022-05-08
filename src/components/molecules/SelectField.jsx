import React from 'react'
import Label from '../atoms/Label'
import Select from '../atoms/SelectBox'

const SelectField = (props) => {
    const data = [
        {
          id: "1",
          name: "One"
        },
        {
          id: "2",
          name: "Two"
        }
      ];
  return (
    <div>
      <Label name={props.name} id={props.id} />
      <Select name={props.name} data={data} id={props.id} />
    </div>
  )
}

export default SelectField
