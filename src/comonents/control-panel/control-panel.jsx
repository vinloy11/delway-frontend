import React from "react";

import './control-panel.scss'
import Button from "../button/button";
import Input from "../input/input";

class ControlPanel extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            message: ''
        };
    }

    changeMessage = message => {
          this.setState({message: message})
    };

    clearInput = () => {
        this.setState({message: ''})
    }

    render() {
        return (
            <div className='control-panel'>
                <Button number={this.state.message} clearInput={this.clearInput} changeAccountNumber={this.props.changeAccountNumber} buttonType="yandex"/>
                <Button gallery={this.props.addPhoto} buttonType="addedPhoto" />
                <Button toggleScreen={this.props.toggleScreen} buttonType="screenShot" />
                <Input clearInput={this.clearInput} value={this.state.message}  addMessage={this.props.addMessage} changeMessage={this.changeMessage}/>
                <Button clearInput={this.clearInput} buttonType="chat" message={this.state.message} addMessage={this.props.addMessage}/>
            </div>
        )
    }
}

export default ControlPanel;