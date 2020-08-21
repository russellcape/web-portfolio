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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouseUser,
  faAddressCard,
  faUniversity,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons'

const homeIcon = <FontAwesomeIcon icon={faHouseUser} />;
const summaryIcon = <FontAwesomeIcon icon={faAddressCard} />;
const educationIcon = <FontAwesomeIcon icon={faUniversity} />;
const employmentIcon = <FontAwesomeIcon icon={faBriefcase} />;

function App() {
  return (
    <div className="App">
      <Router>
          <ProSidebar>
            <Menu>
              <MenuItem icon={homeIcon}>
                Landing
                <Link to="/" />
              </MenuItem>
              <MenuItem icon={summaryIcon}>
                Summary
                <Link to="/summary" />
              </MenuItem>
              <MenuItem icon={educationIcon}>
                Education
                <Link to="/education" />
              </MenuItem>
              <MenuItem icon={employmentIcon}>
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

          <body>
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
          </body>
        </Router>
      </div>
  );
}

export default App;
