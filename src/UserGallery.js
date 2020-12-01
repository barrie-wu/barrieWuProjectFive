import { Component } from 'react';
import firebase from './firebase.js';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

class UserGallery extends Component {
    constructor() {
        super();
        this.state = {
            userImages: []
        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();
        // reference firebase DB
        dbRef.on('value', (data) => {
            // get data from firebase DB
            const firebaseDataObject = data.val();
            // create empty array for data from firebase DB
            let userImagesArray = [];
            // loop through keys in firebase DB
            for (let propertyKey in firebaseDataObject) {
                // extract key:value of firebase object
                const propertyValue = firebaseDataObject[propertyKey];
                // format object to work with array of objects
                const formattedObject = {
                    id: propertyKey,
                    imageProperties: propertyValue
                }
                // .push into empty array
                userImagesArray.push(formattedObject);
            }
            // update state with new array of firebase DB
            this.setState({
                userImages: userImagesArray
            })
        })
    }

    removeImage = (imgId) => {
        const dbRef = firebase.database().ref();
        dbRef.child(imgId).remove();
    }
    
    render() {
        return(
            <ul className="gallery">
                {
                    // map() through userImages array and render to user gallery
                    this.state.userImages.map((image) => {
                        return (
                            <li key={image.imageProperties.id} className="galleryImage" onClick={ () => {this.removeImage(image.id)} }>
                                <img src={image.imageProperties.imgPath} alt="" />
                                <p className="imgFooter">
                                    Photo by <a href={image.imageProperties.url} target="_blank" rel="noreferrer noopener">{image.imageProperties.author}</a>
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