import React from 'react'
import Label from '../atoms/Label'
import TextBox from '../atoms/TextBox'
const InputField = (props) => {
    const {name='', type = '', id = '',size='', placeholder='' } = props;
    console.log("InputField", props)
    return (
        <div>
            <Label name={name} id={id} />
            <TextBox name={name} type={type} id={id} size={size} placeholder={placeholder} />
        </div>

    )
}

export default InputField