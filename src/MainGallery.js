import { Component } from 'react';
import images from './images.js';
import firebase from './firebase.js'
import { FaHeart, FaRegHeart } from 'react-icons/fa';

class MainGallery extends Component {
  constructor() {
    super();
    this.state = {
      liked: false
    }
  }

  handleAddUserLike = (image) => {
    const dbRef = firebase.database().ref();
    dbRef.push(image);
    this.setState({
      liked: !this.state.liked
    })
  } 

  render() {
    return (
      <div>
        <h2>Main Gallery</h2>
        <ul className="gallery">
          {
            // map() through images array render to gallery
            images.map((image, i) => {
              return (
                <li key={image.id} className="galleryImage" onClick={() => { this.handleAddUserLike(image) }}>
                  <img src={image.imgPath} alt="" />
                  <div className="banner" tabIndex={i % 1}>
                    <p className="likedText"></p>
                    {
                      this.state.liked === false 
                        ? <FaRegHeart className="hearts" /> 
                        : <FaHeart className="hearts" />
                    }
                  </div>
                  <p className="imgFooter">
                    Photo by <a href={image.url} target="_blank" rel="noreferrer noopener" tabIndex={i % 1}>{image.author}</a>
                  </p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default MainGallery;