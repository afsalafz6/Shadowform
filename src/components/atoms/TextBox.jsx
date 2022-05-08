import React from 'react'

const TextBox = (props) => {
    return (
        <div>
            <input type="text" id={props.id} size={props.size} placeholder={props.placeholder} />
        </div>
    )
}

export default TextBox