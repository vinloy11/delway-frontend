import React from "react";
import './button.scss'

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

    }

    addPhoto = (e) => {
        this.props.gallery(e.target.files[0])
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

    screenShot = () => {
        this.props.toggleScreen()
    };

    changeAccountNumber = () => {
        this.props.changeAccountNumber(this.props.number);
        this.props.clearInput()
    };

    render() {
        switch (this.props.buttonType) {
            case 'chat' :
                return (
                    <button onClick={this.addMessage} className='button chat-button'></button>
                );
            case 'stream':
                if (!this.props.disabledButton) {
                    return (
                        <button className='button stream'
                                disabled={this.props.startStreamButton === 'disabled' ? 'disabled' : ''}
                                onClick={this.props.startStreamButton === 'disabled' ?  ()=>{} : this.startStream}></button>
                    );
                } else {
                    return <button onClick={this.stopStream} className='button stop stream'></button>
                }
            case 'addedPhoto':
                return (
                    <div className="input-file-wrapper">
                        <label htmlFor="file-upload"></label>
                        <input type="file" id="file-upload" onChange={this.addPhoto}  className="button" />
                    </div>
                );
            case 'yandex':
                return <button onClick={this.changeAccountNumber} className='button yandex'>Y</button>
            case 'screenShot' :
                return (
                    <button onClick={this.screenShot} className="button screenshot"></button>
                );
            default :
                return;
        }
    }
}

export default Button;