import React from "react";

import './button.scss'

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

    }

    addPhoto = () => {
        this.props.gallery(Math.random())
    };

    addMessage = () => {
        this.props.addMessage(this.props.message);
        this.props.clearInput()
    };

    startStream = () => {
        this.props.startStream()
    };

    stopStream = () => {
        this.props.stopStream()
    };

    render() {
        switch (this.props.buttonType) {
            case 'chat' :
                return (
                    <button onClick={this.addMessage} className='button'>ч</button>
                );
            case 'stream':
                if (!this.props.disabledButton) {
                    return (
                        <button className='button stream'
                                disabled={this.props.startStreamButton === 'disabled' ? 'disabled' : ''}
                                onClick={this.props.startStreamButton === 'disabled' ?  ()=>{} : this.startStream}>С</button>
                    );
                } else {
                    return <button onClick={this.stopStream} className='button stream'>s</button>
                }
            case 'addedPhoto':
                return (
                    <button onClick={this.addPhoto} className="button">ap</button>
                );
            case 'screenShot' :
                return (
                    <button className="button">as</button>
                );
            default :
                return;
        }
    }
}

export default Button;