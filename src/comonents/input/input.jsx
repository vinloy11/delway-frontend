import React from "react";

import './input.scss'



const Input = (props) => {
    const changeInput = (event) => {
        props.changeMessage(event.target.value);
    };

    const pressEnter = (event) => {
        if (event.key === 'Enter') {
            props.addMessage(event.target.value);
            props.clearInput();
        
        }
    };



    return (
        <input onKeyPress={pressEnter} value={props.value} onChange={changeInput} className='input'></input>
    )
}

export default Input;