import React from "react";

import './button.scss'

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

    }
    addPhoto = () => {
        this.props.gallery(44)
    }

    render() {
        if (this.props.buttonType === 'chat') {
            return (
                <button className='button'>ч</button>
            )
        } else if (this.props.buttonType === 'photo') {
            return (
                <>
                    <button onClick={this.addPhoto} className='button'>ф</button>
                    <div className="choose-action-wrapper">
                        <Button buttonType="addedPhoto"/>
                        <Button buttonType="screenShot"/>
                    </div>
                </>
            )
        } else if (this.props.buttonType === 'stream') {
            return (
                <button className='button'>С</button>
            )
        } else if (this.props.buttonType === 'addedPhoto') {
            return (
                <button className="button">ap</button>
            )
        } else if (this.props.buttonType === 'screenShot') {
            return (
                <button className="button">as</button>
            )
        }
    }
}

export default Button;