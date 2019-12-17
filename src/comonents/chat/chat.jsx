import React from "react";
import './chat.scss'
import Message from "../message/message";

class Chat extends React.Component {
    render() {
        return(
            <div className='chat'>
                {this.props.message.map((message, key) => (
                    <Message key={key} message={message} />
                ))}
            </div>
        )
    }
}

export default Chat;