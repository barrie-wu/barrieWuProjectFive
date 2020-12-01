import { Component } from 'react';
import MainGallery from './MainGallery.js';
import UserGallery from './UserGallery.js'
import { Link } from 'react-scroll';
import Footer from './Footer.js'
import './App.css';

import { FaRegAddressCard, FaAddressCard } from 'react-icons/fa';

class App extends Component {
  constructor() {
    super();
    this.state = {
      looks: false,
      userGallery: false
    }
  }
  
  // show main gallery click handler
  handleShowLooks = () => {
    this.setState({
      looks: true
    })
  }

  // show user gallery and hide main gallery
  handleToggleGallery = () => {
    this.setState({
      // ! toggle true or false
      userGallery: !this.state.userGallery,
      looks: !this.state.looks
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          {/* click handler on profile icon to switch between main and user gallery */}
          <FaRegAddressCard className="galleryToggleButton" onClick={this.handleToggleGallery}/>
          <div className="insideWrapper headerContents">
            <h1>fashion inspo.</h1>
            <section className="aboutUs">
              <blockquote>“Fashion has to reflect who you are, what you feel at the moment and where you’re going.”</blockquote><figcaption>– Pharrell Williams</figcaption>
              <p className="aboutUsText">Welcome to my fashion inspiration gallery. Here you will find a carefully curated collection of fashion photography that will help with inspiring your next outfit. Simply click on the heart in the top-right corner of each image to save it to your own collection. To switch between your collection and the main collection, use the icon at the top-right of the main window. Press the "get looks" button to load the main gallery.</p>
            </section>
            <div className="startButtonContainer">
              {/* scroll to main section */}
              <Link activeClass="active" to="gallery" spy={true} smooth={true}>
                {/* click handler to show main gallery */}
                <button onClick={this.handleShowLooks} className="startButton" tabIndex="0">get looks</button>
              </Link>
            </div>
          </div>
        </header>
        <main id="gallery">
          <div className="insideWrapper">
              {/* conditional if this.state.looks is true, show MainGallery */}
              {this.state.looks ? <MainGallery /> : null}
              {/* conditinoal if this.state.userGallery is true show UserGallery and set MainGallery to false, refer to above conditional */}
              {this.state.userGallery ? <UserGallery /> : null}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
