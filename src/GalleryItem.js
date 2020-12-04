import { Component } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import firebase from './firebase.js'

class GalleryItem extends Component {
    constructor() {
        super();
        this.state = {
            liked: false,
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
        return(
            <li className="galleryImage" onClick={() => { this.handleAddUserLike(this.props.image) }}>
                <img src={this.props.image.imgPath} alt={this.props.image.altText} />
                <div className="banner" tabIndex={this.props.tabIndexId % 1}>
                    {
                        this.state.liked
                            ? <FaHeart className="hearts" />
                            : <FaRegHeart className="hearts" />
                    }
                </div>
                <p className="imgFooter">
                    Photo by <a href={this.props.image.url} target="_blank" rel="noreferrer noopener" tabIndex={this.props.tabIndexId % 1}>{this.props.image.author}</a>
                </p>
            </li>
        )
    }
}

export default GalleryItem;