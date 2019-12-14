import React from "react";

import './photo.scss'

const Photo = (props) => {
    return  <article className="photo">
                <img src={'http://127.0.0.1:8080/' + props.photo.path} alt=""/>
                {/*<div className="rating">*/}
                {/*    <span className="dislike">{props.photo.likes}</span>*/}
                {/*    <span className="like">{props.photo.likes}</span>*/}
                {/*</div>*/}
            </article>
};

export default Photo;