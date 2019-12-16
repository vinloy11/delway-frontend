import React from "react";
import './video-broadcast.scss'
import Img from "../img/img";
import Button from "../button/button";
import socketIOClient from 'socket.io-client'
import Webcam from "react-webcam";
import Locale from "../../locale";
import Payment from "../payment/payment";

class VideoBroadcast extends React.Component {
    constructor(props) {
        super(props);
        this.intervalID = 0;
        this.state = {
            mainUser: 0,
            startStreamButton: 'not disabled',
            disabledButton: false,
            stream: '',
            endpoint: "http://127.0.0.1:3001"
        };
        this.socket = socketIOClient(this.state.endpoint);
    };


    componentDidMount() {
        this.socket.emit("check state");
        this.socket.on("start stream", data => this.startStreamResponse(data) );
        this.socket.on("check state", data => this.setState({startStreamButton: data}));
        this.socket.on('stop stream', this.stopStreamResponse);

        window.addEventListener('beforeunload', this.stopStream);
    }

    startStreamResponse = (data) => {
        this.setState({ stream: data, startStreamButton: 'disabled' })
    };

    stopStreamResponse = () => {
        this.setState({startStreamButton: 'not disabled', stream: ''})
    };

    startStream = () => {
        this.props.changePaymentNumber();
        this.setState({mainUser: 1, disabledButton: true});
        this.sendStream();
    };

    sendStream = () => {
        this.intervalID = setInterval(() => {
            this.socket.emit('start stream', this.webcam.getScreenshot());
        }, 10);
    };

    stopStream = () => {
        clearInterval(this.intervalID);
        this.setState({mainUser: 0, disabledButton: false});
        this.socket.emit('stop stream');
        window.removeEventListener('beforeunload', this.stopStream);
    };

    screenShot = () => {
        const { screenShot } = this.props;

        if (this.state.stream) {
            screenShot(this.state.stream)
        } else if (this.webcam){
            screenShot(this.webcam.getScreenshot())
        } else {

        }
    };

    componentDidUpdate() {
        if (this.props.sateScreen) {
            this.screenShot();
        }
    }

    render() {
        const locale = Locale.videoBroadcast;

        return (
            <div className='video-broadcast'>
                <section className='page-title'>
                    <div className='application-name' dangerouslySetInnerHTML={{__html: locale.name}}/>
                    <p>{locale.slogan}</p> {this.props.paymentNumber ?
                    <Payment paymentNumber={this.props.paymentNumber}/> :
                    ''}
                </section>
                {this.state.mainUser ? <Webcam ref={e => this.webcam = e}/> : <Img stream={this.state.stream}/>}
                <Button startStreamButton={this.state.startStreamButton}
                        disabledButton={this.state.disabledButton}
                        startStream={this.startStream}
                        stopStream={this.stopStream}
                        buttonType="stream"/>
            </div>
        )
    }
}

export default VideoBroadcast;