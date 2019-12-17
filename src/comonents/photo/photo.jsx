import React from "react";

import './photo.scss'

const Photo = (props) => {
    return  <article className="photo">
                <img src={'http://127.0.0.1:8080/' + props.photo.path} alt=""/>
            </article>
};

export default Photo;