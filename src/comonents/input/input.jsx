import React from "react";

import './input.scss'
import Locale from "../../locale";



const Input = (props) => {
    const locale = Locale.message;
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
        <input placeholder={locale.yourMessage}
               onKeyPress={pressEnter}
               value={props.value}
               onChange={changeInput}
               className='input' />
    )
}

export default Input;