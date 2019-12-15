import React from "react";
import Locale from "../../locale";
import './gallery.scss'
import Photo from "../photo/photo";


class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            isScrolling: false,
            clientY: 0,
            scrollY: 0,
        }
    }

    onMouseDown = e => {
        this.setState({ ...this.state, isScrolling: true,
            clientY: e.clientY });

    };

    onMouseUp = () => {
        this.setState({ ...this.state, isScrolling: false });
    };

    onMouseMove = e => {
        const { clientY, scrollY } = this.state;
        if (this.state.isScrolling) {
            e.target.scrollTop = (scrollY + e.clientY - clientY) * -1;
            this.setState({
                scrollY: scrollY + e.clientY - clientY,
                clientY: e.clientY
            })
        }
    };

    render() {
        const locale = Locale.gallery;
        return (
            <div className="gallery"  onMouseDown={this.onMouseDown}
                 onMouseUp={this.onMouseUp}
                 onMouseMove={this.onMouseMove}>
                <section className="title">{locale.galleryTitle} <span className="line"></span></section>
                <div className="all-photos">
                    {this.props.gallery.map((photo) => (
                        <Photo photo={photo} key={photo.id} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Gallery;