import { Component } from 'react';
import images from './images.js';
import GalleryItem from './GalleryItem.js';

class MainGallery extends Component {
  constructor () {
    super();
    this.state = {
      mainGallery: images,
    }
  }

  render() {
    return (
      <div className="insideWrapper">
        <h2>Main Gallery</h2>
        <ul className="gallery">
          {
            // map shuffled gallery and return GalleryItem Component to handle each gallery item
            this.state.mainGallery.map((image, i) => {
              return (
                  <GalleryItem key={image.id} image={image} tabIndexId={i}/>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default MainGallery;



              