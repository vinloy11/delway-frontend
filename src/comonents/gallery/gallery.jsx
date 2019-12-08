import React from "react";
import Locale from "../../locale";
import './gallery.scss'
import Photo from "../photo/photo";


class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    changeProps = () => {
        // console.log(props.gallery)
    };

    render() {
        const locale = Locale.gallery;
        return (
            <div className="gallery">
                <section className="title">{locale.galleryTitle} <span className="line"></span></section>
                <div className="all-photos">
                    {this.props.gallery.map((photo) => (
                        <Photo key={photo.id} photo={photo}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Gallery;