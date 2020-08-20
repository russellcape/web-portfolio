import React from 'react';
import './App.css';
import './images/binary-wallpaper.jpg'

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
        <div className="home">
          <h1>Landing page</h1>        
        </div>
        <div className="summary">
          <h1>Summary Page</h1>
        </div>
        <div className="education">
          <h1>Education</h1>
        </div>
        <div className="employment">
          <h1>Employment</h1>
        </div>
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
