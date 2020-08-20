import React from 'react';
import './App.css';
import './images/binary-wallpaper.jpg'
import Landing from './components/Landing';
import Summary from './components/Summary';
import Education from './components/Education';
import Employment from './components/Employment';
import Projects from './components/Projects'
import Skills from './components/Skills';
import Awards from './components/Awards';
import Activities from './components/Activities';
import Volunteering from './components/Volunteering';
import ContactInfo from './components/ContactInfo';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <body>
        <Nav/>
        <div className ="content">
        <Landing/>
        <Summary/>
        <Education/>
        <Employment/>
        <Projects/>
        <Skills/>
        <Awards/>
        <Activities/>
        <Volunteering/>
        <ContactInfo/>
        </div>
      </body>
    </div>
  );
}

export default App;
