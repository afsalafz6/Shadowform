import React from 'react'

const Label = (props) => {
    return (
        <div>
            <label htmlFor={props.id}>{props.label} </label>
        </div>
    )
}

export default Label
