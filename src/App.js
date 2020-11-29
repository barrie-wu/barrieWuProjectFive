import { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="insideWrapper headerContents">
            <h1>fashion inspo.</h1>
            <section className="aboutUs">
              <blockquote>“Fashion has to reflect who you are, what you feel at the moment and where you’re going.”</blockquote><figcaption>– Pharrell Williams</figcaption>
              <p className="aboutUsText">Welcome to my fashion inspiration gallery. Here you will find a carefully curated collection of fashion photography that will help with inspiring your next outfit. Simply click on the heart in the top-right corner of each image to save it to your own collection. To switch between your collection and the main collection, use the icon at the top-right of the main window. Press the "get looks" button to load the main gallery.</p>
            </section>
            <button className="startButton" tabindex="0">get looks</button>
          </div>
        </header>
        <main className="gallery">
          <div className="wrapper"></div>
        </main>
      </div>
    );
  }
}

export default App;
