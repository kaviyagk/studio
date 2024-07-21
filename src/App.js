import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <div className="filltext">HASHTAG STUDIO</div>

      </div>
      <div className="sectionCard">
        <section>
          <div class="card">
            <h1>Top <span class="color-text">Photographs</span> In The Studio</h1>
            <p className="paragraph">Our wedding photography style is modern, contemporary and off-beat. A short selection of some of our favourites is given. </p>
          </div>
          <div class="card">
          </div>
          <div class="card">
          </div>
          <div class="card">
          </div>
        </section>
        <Footer />
      </div>



    </div>
  );
}

export default App;
