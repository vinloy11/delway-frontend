import React from "react";
import './video-broadcast.scss'
import Img from "../img/img";
import Button from "../button/button";
class VideoBroadcast extends React.Component {
    constructor(props) {
        super(props);
        this.mainUser = 0;
        this.props = props;
    }
    videoRef  = React.createRef();
    startStream = () => {
        navigator.mediaDevices.getUserMedia({
            video: {
                width: 426,
                height: 240
            }
        }).then((stream) => this.videoRef.current.srcObject = stream);
        this.mainUser = 1;
        // startStreamButton.classList.add('hidden');
        // sendStream();
    };

    render() {
        return (
            <div className='video-broadcast'>
                <section className='page-title'>
                    <div className='application-name'><span>Del</span><span>Way</span></div>
                    <p>Is it live, or is it DelWay?</p>
                </section>
                {!this.mainUser ? <video ref={this.videoRef} src=""></video> : <Img stream={this.props.stream}/>}
                <Button startStream={this.startStream} buttonType="stream" />
            </div>
        )
    }
}

export default VideoBroadcast;