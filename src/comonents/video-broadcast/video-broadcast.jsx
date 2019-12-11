import React from "react";
import './video-broadcast.scss'
import Img from "../img/img";
import Button from "../button/button";
import socketIOClient  from 'socket.io-client'

class VideoBroadcast extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.intervalID = 0;
        this.state = {
            mainUser: 0,
            stopStreamButton: false,
            startStreamButton: true,
            disabledStartStreamButton: false,
            endpoint: "http://localhost:3001"
           }
        this.socket = socketIOClient(this.state.endpoint);
    };
    videoRef  = React.createRef();
    startStream = () => {
        navigator.mediaDevices.getUserMedia({
            video: {
                width: 426,
                height: 240
            }
        }).then((stream) => this.videoRef.current.srcObject = stream);
        this.setState({
            mainUser: 1,
            startStreamButton: false,
            stopStreamButton: true,
        })
       this.sendStream();
    };

    sendStream = () => {
        this.intervalID = setInterval(() => {
            let video = this.videoRef.current;
            this.socket.emit('start stream', this.getFrame(video));
        }, 50);
    }
    getFrame = (video) => {
        let canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
        let dataVideo = canvas.toDataURL('video/mp4');
        return dataVideo;
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