import React from "react";

import './input.scss'



const Input = (props) => {
    const changeInput = (event) => {
        props.changeMessage(event.target.value);
    };

    const pressEnter = (event) => {
        if (event.key === 'Enter') {
            props.addMessage(event.target.value);
            clearInput(event.target);
        }
    };

    const clearInput = target => {
        target.value = ''
    };

    return (
        <input onKeyPress={pressEnter}  onChange={changeInput} className='input'></input>
    )
}

export default Input;