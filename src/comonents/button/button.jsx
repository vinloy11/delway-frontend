import React from "react";
import './button.scss'

class Button extends React.Component {

    addPhoto = (e) => {
        this.props.gallery(e.target.files[0])
    };

    addMessage = () => {
        const { addMessage, message, clearInput } = this.props;
        addMessage(message);
        clearInput()
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
        const { changeAccountNumber, number, clearInput } = this.props;
        changeAccountNumber(number);
        clearInput()
    };

    render() {
        switch (this.props.buttonType) {
            case 'chat' :
                return (
                    <button onClick={this.addMessage} className='button chat-button' />
                );
            case 'stream':
                if (!this.props.disabledButton) {
                    return (
                        <button className='button stream'
                                disabled={this.props.startStreamButton === 'disabled' ? 'disabled' : ''}
                                onClick={this.props.startStreamButton === 'disabled' ?  ()=>{} : this.startStream} />
                    );
                } else {
                    return <button onClick={this.stopStream} className='button stop stream' />
                }
            case 'addedPhoto':
                return (
                    <div className="input-file-wrapper">
                        <label htmlFor="file-upload" />
                        <input type="file" id="file-upload" onChange={this.addPhoto}  className="button" />
                    </div>
                );
            case 'yandex':
                return <button onClick={this.changeAccountNumber} className='button yandex'>Y</button>
            case 'screenShot' :
                return (
                    <button onClick={this.screenShot} className="button screenshot" />
                );
            default :
                return;
        }
    }
}

export default Button;