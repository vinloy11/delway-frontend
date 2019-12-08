import React from "react";

import './photo.scss'

const Photo = (props) => {
    return  <article className="photo">
                <img src={props.photo.src} alt=""/>
                <div className="rating">
                    <span className="dislike">{props.photo.likes}</span>
                    <span className="like">{props.photo.likes}</span>
                </div>
            </article>
};

export default Photo;