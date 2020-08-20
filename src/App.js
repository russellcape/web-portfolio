import React from 'react';
import './App.css';
import './images/binary-wallpaper.jpg'
import Landing from './components/Landing';
import Summary from './components/Summary';
import Education from './components/Education';
import Employment from './components/Employment';

function App() {
  return (
    <div className="App">
      <body>
      <div className="navBar">
        <nav className="nav">
          <li><a href="home">Russell Cape</a></li>
          <li><a href="#">Summary</a></li>
          <li><a href="#">Education</a></li>
          <li><a href="#">Employment</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Awards</a></li>
          <li><a href="#">Activies</a></li>
          <li><a href="#">Volunteering</a></li>
          <li><a href="#">Contact Info</a></li>
        </nav>
      </div>
      <div className ="content">
        <Landing/>
        <Summary/>
        <Education/>
        <Employment/>
        <div className="projects">
          <h1>Projects</h1>
        </div>
        <div className="skills">
          <h1>Skills</h1>
        </div>
        <div className="Awards">
          <h1>Awards</h1>
        </div>
        <div className="activities">
          <h1>Activities</h1>
        </div>
        <div className="volunteering">
          <h1>Volunteering</h1>
        </div>
        <div className="contactInfo">
          <h1>Contact Info</h1>
        </div>
        </div>
      </body>
    </div>
  );
}

export default App;
