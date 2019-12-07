import React from "react";
import Locale from "../../locale";
import './gallery.scss'



class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    changeProps = () => {
      // console.log(props.gallery)
    };
    render() {
        console.log(this.props.gallery);
        const locale = Locale.gallery;
        return (
            <div className='gallery'>
                <section className="title">{locale.galleryTitle} <span className="line"></span></section>
                <div>{this.props.gallery.map(photo => (
                    <div>{photo.src}</div>
                ))}</div>
            </div>
        )
    }
}

export default Gallery;