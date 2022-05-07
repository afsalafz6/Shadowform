import React from 'react'

const TextBox = (props) => {
    console.log("Textbox ", props)
    return (
        <div>
            <input type="text" id={props.id} size={props.size} placeholder={props.placeholder} />
        </div>
    )
}

export default TextBox