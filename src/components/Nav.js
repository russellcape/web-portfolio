import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom'
import 'react-pro-sidebar/dist/css/styles.css';

function Nav() {
    return (
        // <nav className="nav">
        //   <li><a href="#">Russell Cape</a></li>
        //   <li><a href="#">Summary</a></li>
        //   <li><a href="#">Education</a></li>
        //   <li><a href="#">Employment</a></li>
        //   <li><a href="#">Projects</a></li>
        //   <li><a href="#">Skills</a></li>
        //   <li><a href="#">Awards</a></li>
        //   <li><a href="#">Activies</a></li>
        //   <li><a href="#">Volunteering</a></li>
        //   <li><a href="#">Contact Info</a></li>
        // </nav>

        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem /*icon={}*/>Dashboard</MenuItem>
            <SubMenu title="Components" /*icon={}*/>
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>
    )
}

export default Nav;