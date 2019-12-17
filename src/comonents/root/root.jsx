import React from "react";
import socketIOClient from 'socket.io-client'
import Chat from "../chat/chat";
import './root.scss'
import Gallery from "../gallery/gallery";
import VideoBroadcast from "../video-broadcast/video-broadcast";
import ControlPanel from "../control-panel/control-panel";
import delWayRequest from "../../api/delway";

const END_POINT = 'http://127.0.0.1:3001';

const gallery = [];

const messages = [];

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery,
            screen: '',
            response: messages,
            loading: false,
            myAccount: '',
            hisAccount: ''
        };
        this.socket = socketIOClient(END_POINT);
    }

    componentDidMount() {
        this.getGallery();
        this.socket.on("chat message", data => this.setState(prevState => ({
            response: [
                {content: data, date: this.getCurrentDate()},
                ...prevState.response
            ]
        })));
        this.socket.on("change number", number => this.setState({hisAccount: number}))
        this.updateGallery();
    }

    getGallery = () => {
        delWayRequest.get('/gallery').then(response => {
            const gallery = response.data.data;
            this.setState({gallery})
        });
    };

    updateGallery = () => {
        setInterval(() => {
            this.getGallery()
        }, 1000 * 10)
    };

    getCurrentDate() {
        const date = new Date();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return hour + ":" + minutes + ":" + seconds;
    }

    addPhoto = photo => {
        const formData = new FormData();
        formData.append("avatar", photo);
        delWayRequest.post('/gallery', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(() => this.getGallery());

    };


    addMessage = message => {
        const trimmedMessage = message.trim();

        if (!trimmedMessage || trimmedMessage === ' ') {
            return;
        }

        return this.socket.emit('chat message', trimmedMessage);
    };

    changePaymentNumber = () => {
        this.socket.emit('change number', this.state.myAccount);
    };

    changeAccountNumber = number => {
        const parseNumber = parseInt(number.trim());
        if (!parseNumber) {
            return;
        }

        this.setState({myAccount: number})

    };

    toggleScreen = () => {
        this.setState({screen: true});
    };

    screenShot = (base64) => {
        this.setState({screen: false});
        delWayRequest.post('/gallery/screenshot', {base64}).then(() => this.getGallery());
    };

    render() {
        return (
            <div className="main">
                <Gallery gallery={this.state.gallery} addPhoto={this.addPhoto}/>
                <VideoBroadcast paymentNumber={this.state.hisAccount}
                                changePaymentNumber={this.changePaymentNumber}
                                screenShot={this.screenShot}
                                sateScreen={this.state.screen}/>
                <Chat message={this.state.response}/>
                <ControlPanel changeAccountNumber={this.changeAccountNumber}
                              toggleScreen={this.toggleScreen}
                              gallery={this.state.gallery}
                              addPhoto={this.addPhoto}
                              addMessage={this.addMessage}/>
            </div>
        )
    }
}

export default Root