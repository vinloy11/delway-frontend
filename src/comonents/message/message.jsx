import React from "react";
import './message.scss'
const Message = (props) => {
    return  <article className="message">
                <div className="date">{props.message.date}</div>
                <div className="content">{props.message.content}</div>
            </article>
};

export default Message;