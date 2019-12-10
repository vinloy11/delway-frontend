import React from "react";
import './img.scss'
const Img = (props) => {
    return <div className="img-wrapper">
        <img className="fake-img" src="http://localhost:3000/logo192.png" alt=""/>
        <img className="img" src={props.stream} alt=""/>
    </div>
};

export default Img;