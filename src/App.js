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
  faBriefcase,
  faProjectDiagram,
  faLayerGroup,faAward, faRoute, faHandsHelping, faAddressBook, faIdCard
} from '@fortawesome/free-solid-svg-icons'

const homeIcon = <FontAwesomeIcon icon={faHouseUser} />;
const summaryIcon = <FontAwesomeIcon icon={faAddressBook} />;
const educationIcon = <FontAwesomeIcon icon={faUniversity} />;
const employmentIcon = <FontAwesomeIcon icon={faBriefcase} />;
const projectsIcon = <FontAwesomeIcon icon={faProjectDiagram} />;
const skillStackIcon = <FontAwesomeIcon icon={faLayerGroup} />;
const awardsIcon = <FontAwesomeIcon icon={faAward} />;
const activitiesIcon = <FontAwesomeIcon icon={faRoute} />;
const volunteeringIcon = <FontAwesomeIcon icon={faHandsHelping} />;
const contactInfoIcon = <FontAwesomeIcon icon={faIdCard} />;

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
              <MenuItem icon={projectsIcon}>
                Projects
                <Link to="/projects" />
              </MenuItem>
              <MenuItem icon={skillStackIcon}>
                Skill Stack
                <Link to="/skills" />
              </MenuItem>
              <MenuItem icon={awardsIcon}>
                Awards
                <Link to="/awards" />
              </MenuItem>
              <MenuItem icon={activitiesIcon}>
                Activities
                <Link to="/activities" />
              </MenuItem>
              <MenuItem icon={volunteeringIcon}>
                Volunteering
                <Link to="/volunteering" />
              </MenuItem>
              <MenuItem icon={contactInfoIcon}>
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
