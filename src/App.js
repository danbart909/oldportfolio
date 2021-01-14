import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import ParticlesBg from 'particles-bg'
import Bio from './Bio'
import Projects from './Projects'
import Contact from './Contact'
import Resources from './Resources'
import BioNav from './BioNav'
import ProjectsNav from './ProjectsNav'
import ContactNav from './ContactNav'
import ResourcesNav from './ResourcesNav'

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
              <Route
                exact path='/resources' component={Resources}
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
              <Route
                exact path='/resources' component={ResourcesNav}
              />
            </Switch>
          </div>
        </div>
      </>
    )
  }
}