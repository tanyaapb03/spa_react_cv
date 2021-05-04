import React, { Component } from "react";
// import { Router } from "react-router";
import {Route,NavLink,HashRouter} from "react-router-dom";
import aboutme from "./aboutme";
import projects from './projects';
import contact from "./contactme";


 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>profile</h1>
          
          <ul className="header">
          <li><NavLink to="/">aboutme</NavLink></li>
            <li><NavLink to="/projects">projects</NavLink></li>
            <li><NavLink to="/contactme">contactme</NavLink></li>
          </ul>
          </div>
          <div className="content">
              <Route path="/" component={aboutme}/>
              <Route path="/projects" component={projects}/>
              <Route path="/contactme" components={contact}/>
             
          </div>
         
        </HashRouter>
    );
  }
}
 
export default Main;
