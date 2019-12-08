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

    addMessage= () => {
        this.props.addMessage(this.props.message)
    }

    render() {
        switch (this.props.buttonType) {
            case 'chat' :
                return (
                    <button onClick={this.addMessage} className='button'>ч</button>
                );
            case 'photo' :
                return (
                    <>
                        <button onClick={this.addPhoto} className='button'>ф</button>
                        <div className="choose-action-wrapper">
                            <Button buttonType="addedPhoto"/>
                            <Button buttonType="screenShot"/>
                        </div>
                    </>
                );
            case 'stream':
                return (
                    <button className='button'>С</button>
                );
            case 'addedPhoto':
                return (
                    <button className="button">ap</button>
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