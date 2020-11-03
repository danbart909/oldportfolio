import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import ParticlesBg from 'particles-bg'
import Bio from './Bio'
import Projects from './Projects'
import Contact from './Contact'
import BioNav from './BioNav'
import ProjectsNav from './ProjectsNav'
import ContactNav from './ContactNav'

export default class App extends Component {
  render() {
    return (
      <>
        <div id='overlord'>
          <div id="main-container">
            <Switch>
              <Route
                exact path='/' component={Bio}
              />
              <Route
                exact path='/projects' component={Projects}
              />
              <Route
                exact path='/contact' component={Contact}
              />
            </Switch>
          </div>
          <div id='nav-container'>
            <Switch>
              <Route
                exact path='/' component={BioNav}
              />
              <Route
                exact path='/projects' component={ProjectsNav}
              />
              <Route
                exact path='/contact' component={ContactNav}
              />
            </Switch>
          </div>
        </div>
      </>
    )
  }
}