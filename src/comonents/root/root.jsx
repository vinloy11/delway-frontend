import React from "react";
import Chat from "../chat/chat";
import './root.scss'
import Gallery from "../gallery/gallery";
import VideoBroadcast from "../video-broadcast/video-broadcast";
import ControlPanel from "../control-panel/control-panel";

const gallery = [
    {
        src: '../../public/logo192.png',
        id: 21,
        likes: 41
    },
    {
        src: '../../public/logo192.png',
        id: 3213,
        likes: 1
    },
    {
        src: '../../public/logo192.png',
        id: 1,
        likes: 32
    }
];

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {gallery:gallery, debil: [{0: 'lox', 2: 'pidr'}]};
    }

    addPhoto = photo => {
      this.setState(prevState => ({
          gallery: [
              ...prevState.gallery,
              {  src: '../../public/logo192.png', id: photo, likes: 32}
          ]
      }))
    };

    // removePhoto = () => {
    //
    // }

    render() {
        return (
            <div className="main">
                <Gallery gallery={this.state.gallery} addPhoto={this.addPhoto}/>
                <VideoBroadcast />
                <Chat />
                <ControlPanel gallery={this.state.gallery} addPhoto={this.addPhoto} />
            </div>
        )
    }
}

export default Root