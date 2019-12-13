import React from "react";
import socketIOClient  from 'socket.io-client'
import Chat from "../chat/chat";
import './root.scss'
import Gallery from "../gallery/gallery";
import VideoBroadcast from "../video-broadcast/video-broadcast";
import ControlPanel from "../control-panel/control-panel";


const gallery = [
    {
        src: 'http://192.168.0.15:3000/logo192.png',
        id: 21,
        likes: 41
    },
    {
        src: 'http://192.168.0.15:3000/logo192.png',
        id: 3213,
        likes: 1
    },
    {
        src: 'http://192.168.0.15:3000/logo192.png',
        id: 1,
        likes: 32
    }
];

const messages = [
];

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery:gallery,
            debil: [{0: 'lox', 2: 'pidr'}],
            response: messages,
            endpoint: "http://192.168.0.15:3001"
        };
        this.socket = socketIOClient(this.state.endpoint);
    }

    componentDidMount() {
        this.socket.on("chat message", data => this.setState(prevState => ({
            response: [
                { content: data, date: this.getCurrentDate() },
                ...prevState.response
            ]
        })));

    }


    getCurrentDate() {
        let date = new Date();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        return hour+":"+minutes+":"+seconds;
    }

    addPhoto = photo => {
      this.setState(prevState => ({
          gallery: [
              {  src: 'http://localhost:3000/logo192.png', id: photo, likes: 32},
              ...prevState.gallery
          ]
      }))
    };


    addMessage = message => {
        message = message.trim();
        if (message !== '' && message !== ' ') {
            this.socket.emit('chat message', message);
        } else return true;
    };

    // removePhoto = () => {
    //
    // }

    render() {
        return (
            <div className="main">
                <Gallery gallery={this.state.gallery} addPhoto={this.addPhoto}/>
                <VideoBroadcast />
                <Chat message={this.state.response} />
                <ControlPanel  gallery={this.state.gallery} addPhoto={this.addPhoto} addMessage={this.addMessage} />
            </div>
        )
    }
}

export default Root