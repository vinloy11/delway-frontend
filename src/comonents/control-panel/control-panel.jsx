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

    clearMessage = () => {

    };

    render() {

        return (
            <div className='control-panel'>
                <Button gallery={this.props.addPhoto} buttonType="photo" />
                <Input  addMessage={this.props.addMessage} changeMessage={this.changeMessage}/>
                <Button buttonType="stream" />
                <Button buttonType="chat" message={this.state.message} addMessage={this.props.addMessage}/>
            </div>
        )
    }
}

export default ControlPanel;