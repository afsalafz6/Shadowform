import React from 'react'
import Label from '../atoms/Label'
import TextBox from '../atoms/TextBox'
const InputField = (props) => {
    const {name='', type ='', id ='', label='', size='', placeholder='',onChange, value } = props;
    return (
        <div>
            <Label label={label} id={id} />
            <TextBox name={name} type={type} id={id} value={value} size={size} placeholder={placeholder} onChange={onChange} />
        </div>

    )
}

export default InputField