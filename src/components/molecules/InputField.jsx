import React from 'react'
import Label from '../atoms/Label'
import TextBox from '../atoms/TextBox'
const InputField = (props) => {
    console.log("InputField", props)
    return (
        <div>

            <Label name={props.name} id={props.id} />
            <TextBox name={props.name} id={props.id} size={props.size} placeholder={props.placeholder} />


        </div>

    )
}

export default InputField