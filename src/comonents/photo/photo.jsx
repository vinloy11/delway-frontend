import React from "react";

import './photo.scss'

const Photo = (props) => {
    const like = () => {
        console.log('like')
    };
    return  <article className="photo">
                <img
                    onDoubleClick={like}
                    src={'http://127.0.0.1:8080/' + props.photo.path} alt=""/>
                {/*<div className="rating">*/}
                {/*    <span className="dislike">{props.photo.likes}</span>*/}
                {/*    <span className="like">{props.photo.likes}</span>*/}
                {/*</div>*/}
            </article>
};

export default Photo;