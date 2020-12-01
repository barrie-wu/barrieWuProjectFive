import { Component } from 'react';
import images from './images.js';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

class UserGallery extends Component {
     render() {
        return(
            <ul className="gallery">
                {
                    // map() through images array render to gallery
                    images.map((image) => {
                        return (
                            <li key={image.id} className="galleryImage" onClick={() => { this.handleAddUserLike(image) }}>
                                <img src={image.imgPath} alt="" />
                                <p className="imgFooter">
                                    Photo by <a href={image.url} target="_blank" rel="noreferrer noopener">{image.author}</a>
                                </p>
                                <div className="banner">
                                    <p className="likedText"></p>
                                    <FaRegHeart className="hearts" />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default UserGallery;