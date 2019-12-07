import React from "react";

import './control-panel.scss'
import Button from "../button/button";
import Input from "../input/input";

class ControlPanel extends React.Component {
    constructor(props) {
        super(props);
        this.props = props
        // this.props.addPhoto(44);
    }
    render() {
        console.log(this.props.gallery);

        return (
            <div className='control-panel'>
                <Button gallery={this.props.addPhoto} buttonType="photo" />
                <Input />
                <Button buttonType="stream" />
                <Button buttonType="chat" />
            </div>
        )
    }
}

export default ControlPanel;