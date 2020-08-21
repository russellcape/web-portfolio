import React from 'react';
import './App.css';
import './images/binary-wallpaper.jpg'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { 
  BrowserRouter as Router,
  Link, 
  Route,
  Switch
} from 'react-router-dom'
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

function App() {
  return (
    <div className="App">
      <Router>
          <ProSidebar>
            <Menu>
              <MenuItem>
                Landing
                <Link to="/" />
              </MenuItem>
              <MenuItem>
                Summary
                <Link to="/summary" />
              </MenuItem>
              <MenuItem>
                Education
                <Link to="/education" />
              </MenuItem>
              <MenuItem >
                Employment
                <Link to="/employment" />
              </MenuItem>
              <MenuItem >
                Projects
                <Link to="/projects" />
              </MenuItem>
              <MenuItem >
                Skills
                <Link to="/skills" />
              </MenuItem>
              <MenuItem >
                Awards
                <Link to="/awards" />
              </MenuItem>
              <MenuItem >
                Activities
                <Link to="/activities" />
              </MenuItem>
              <MenuItem >
                Volunteering
                <Link to="/volunteering" />
              </MenuItem>
              <MenuItem >
                Contact Info
                <Link to="/contact" />
              </MenuItem>
            </Menu>
          </ProSidebar>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          <div className="routes">
            <Switch>
              <Route path="/contact">
                <ContactInfo />
              </Route>
              <Route path="/volunteering">
                <Volunteering />
              </Route>
              <Route path="/activities">
                <Activities />
              </Route>
              <Route path="/awards">
                <Awards />
              </Route>
              <Route path="/skills">
                <Skills />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/employment">
                <Employment />
              </Route>
              <Route path="/education">
                <Education />
              </Route>
              <Route path="/summary">
                <Summary />
              </Route>
              <Route path="/">
                <Landing />
              </Route>
            </Switch>
          </div>
        </Router>
      <body>
      </body>
    </div>
  );
}

export default App;
