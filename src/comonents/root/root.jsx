import React from "react";
import socketIOClient  from 'socket.io-client'
import Chat from "../chat/chat";
import './root.scss'
import Gallery from "../gallery/gallery";
import VideoBroadcast from "../video-broadcast/video-broadcast";
import ControlPanel from "../control-panel/control-panel";
import delWayRequest from "../../api/delway";


const gallery = [];

const messages = [];

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery:gallery,
            screen: '',
            debil: [{0: 'lox', 2: 'pidr'}],
            response: messages,
            loading: false,
            endpoint: "http://127.0.0.1:3001"
        };
        this.socket = socketIOClient(this.state.endpoint);
    }

    componentDidMount() {
        this.getGallery();
        this.socket.on("chat message", data => this.setState(prevState => ({
            response: [
                { content: data, date: this.getCurrentDate() },
                ...prevState.response
            ]
        })));
        this.updateGallery();

    }

    getGallery = () => {
        delWayRequest.get('/gallery').then(response => {
            const gallery = response.data.data;
            this.setState({gallery})
        });
    };

    updateGallery = () => {
        setInterval(() => {this.getGallery()}, 1000 * 10 )
    };

    getCurrentDate() {
        let date = new Date();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        return hour+":"+minutes+":"+seconds;
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
        message = message.trim();
        if (message !== '' && message !== ' ') {
            this.socket.emit('chat message', message);
        } else return true;
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
                <VideoBroadcast screenShot={this.screenShot} sateScreen={this.state.screen} />
                <Chat message={this.state.response} />
                <ControlPanel toggleScreen={this.toggleScreen}  gallery={this.state.gallery} addPhoto={this.addPhoto} addMessage={this.addMessage} />
            </div>
        )
    }
}

export default Root